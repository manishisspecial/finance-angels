-- UPDATE PRODUCTS TABLE WITH PAYOUT AMOUNT COLUMN
-- This script adds payout_amount column for credit cards and updates commission rates

-- STEP 1: Add payout_amount column to products table
ALTER TABLE products ADD COLUMN IF NOT EXISTS payout_amount INTEGER DEFAULT 1500;

-- STEP 2: Update existing credit cards with payout amounts
UPDATE products 
SET payout_amount = CASE 
  WHEN name LIKE '%Platinum%' THEN 2000
  WHEN name LIKE '%Legend%' THEN 2000
  WHEN name LIKE '%Aura%' THEN 2500
  WHEN name LIKE '%Ultra%' THEN 2500
  WHEN name LIKE '%Zenith%' THEN 3000
  WHEN name LIKE '%Vetta%' THEN 2000
  WHEN name LIKE '%Altura%' THEN 1800
  WHEN name LIKE '%Xcite%' THEN 1500
  WHEN name LIKE '%SBI%' THEN 1200
  WHEN name LIKE '%ICICI%' THEN 1500
  WHEN name LIKE '%Axis%' THEN 1500
  WHEN name LIKE '%Kotak%' THEN 1200
  WHEN name LIKE '%HDFC%' THEN 1500
  WHEN name LIKE '%HSBC%' THEN 2000
  WHEN name LIKE '%RBL%' THEN 1000
  WHEN name LIKE '%YES%' THEN 1200
  WHEN name LIKE '%AU%' THEN 1500
  ELSE 1500
END
WHERE type = 'credit_card';

-- STEP 3: Update commission rates for loans (varying rates)
UPDATE products 
SET commission_rate = CASE 
  WHEN type = 'personal_loan' AND name LIKE '%Poonawalla%' THEN 2.5
  WHEN type = 'personal_loan' AND name LIKE '%MoneyView%' THEN 2.5
  WHEN type = 'personal_loan' AND name LIKE '%KreditBee%' THEN 2.0
  WHEN type = 'personal_loan' AND name LIKE '%Unity%' THEN 2.0
  WHEN type = 'personal_loan' AND name LIKE '%Zype%' THEN 2.5
  WHEN type = 'business_loan' AND name LIKE '%Flexiloans%' THEN 3.0
  WHEN type = 'business_loan' AND name LIKE '%Lendingkart%' THEN 3.5
  WHEN type = 'personal_loan' THEN 2.0
  WHEN type = 'business_loan' THEN 3.0
  ELSE commission_rate
END
WHERE type IN ('personal_loan', 'business_loan');

-- STEP 4: Update credit card commission rates (varying rates)
UPDATE products 
SET commission_rate = CASE 
  WHEN name LIKE '%Platinum%' THEN 2.5
  WHEN name LIKE '%Legend%' THEN 2.5
  WHEN name LIKE '%Aura%' THEN 2.5
  WHEN name LIKE '%Ultra%' THEN 2.5
  WHEN name LIKE '%Zenith%' THEN 2.5
  WHEN name LIKE '%Vetta%' THEN 2.5
  WHEN name LIKE '%Altura%' THEN 2.0
  WHEN name LIKE '%Xcite%' THEN 2.0
  WHEN name LIKE '%SBI%' THEN 2.0
  WHEN name LIKE '%ICICI%' THEN 2.5
  WHEN name LIKE '%Axis%' THEN 2.0
  WHEN name LIKE '%Kotak%' THEN 2.0
  WHEN name LIKE '%HDFC%' THEN 2.5
  WHEN name LIKE '%HSBC%' THEN 2.5
  WHEN name LIKE '%RBL%' THEN 2.0
  WHEN name LIKE '%YES%' THEN 2.0
  WHEN name LIKE '%AU%' THEN 2.5
  WHEN name LIKE '%Kiwi%' THEN 2.0
  WHEN name LIKE '%Federal%' THEN 2.0
  WHEN name LIKE '%Baroda%' THEN 2.0
  ELSE 2.0
END
WHERE type = 'credit_card';

-- STEP 5: Verify the updates
SELECT 
    type,
    COUNT(*) as product_count,
    AVG(commission_rate) as avg_commission,
    AVG(payout_amount) as avg_payout,
    MIN(payout_amount) as min_payout,
    MAX(payout_amount) as max_payout
FROM products 
GROUP BY type 
ORDER BY type;

-- STEP 6: Show sample credit cards with payout amounts
SELECT 
    name,
    type,
    provider,
    commission_rate,
    payout_amount,
    status
FROM products 
WHERE type = 'credit_card' 
ORDER BY payout_amount DESC 
LIMIT 10;

-- STEP 7: Show sample loans with commission rates
SELECT 
    name,
    type,
    provider,
    commission_rate,
    status
FROM products 
WHERE type IN ('personal_loan', 'business_loan')
ORDER BY commission_rate DESC 
LIMIT 10;

-- STEP 8: Final verification
SELECT 'PRODUCTS TABLE UPDATED WITH PAYOUT AMOUNTS AND VARIABLE COMMISSION RATES!' as status; 