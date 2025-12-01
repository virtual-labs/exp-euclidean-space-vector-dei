This experiment has been designed to help students with the understanding of the 2-dimensional Euclidean space which is commonly visualized as the flat plane and is mathematically represented as the real vector space R<sup>2</sup>, essentially the set of all ordered pairs of real numbers, by exploring the relationship between points on the plane and elements in R<sup>2</sup>. Vector representation of a point in plane is also given. Thus students will gain a deeper appreciation of how geometry and linear algebra are interconnected. Besides, the experiment encourages learners to extend this understanding to more abstract, higher-dimensional spaces, thereby building a foundation for studying vector spaces, in general. Here, N and R denote the natural numbers and real number respectively.Let N and R denote the natural numbers and real numbers respectively.

**1. 2-dimensional Euclidean Space:**
 The system ( $R<sup>2</sup>$ ,+ , . ) together with R is the 2-dimensional Euclidean space, where

**(i)** R<sup>2</sup> = { (x , y) | (x , y) ∈ R} <br>
**(ii)** + , called addition, is defined as <br>
&emsp; (a , b) + (c , d) = ( a+c , b+d ); where (a , b) and (c , d) ∈ R<sup>2</sup> <br>
**(iii)** . , called scalar multiplication, is defined as <br> 
&emsp; α . (a , b) = (α . a , α . b); where α ∈ R and (a , b) ∈ R<sup>2</sup> . <br>

Note that,

**a.** In (ii), "+" on the left side is the addition of R<sup>2</sup> and on the right side it is the addition of R. For example, when (2, 3) and (1, 4) in R<sup>2</sup> are added, we have (2, 3) + (1, 4) = (2+1, 3+4). Here ‘‘+’’ on the left side is the addition of R<sup>2</sup> and on the right side it is the addition of R.<br>
**b.** In (iii), "." on the left side is the scalar multiplication of R<sup>2</sup> and on the right side it is the multiplication of R.For example, when 2 in R and (2, 3) in R<sup>2</sup> are multiplied, we have 2.(2, 3)=(2.2, 2.3). Here ‘‘.’’ on the left side is the scalar multiplication of R<sup>2</sup> and on the right side it is the multiplication of R.<br>

**2. Geometric Visualization:**
It is well known that there is a one-to-one correspondence between the plane and R<sup>2</sup>. That is, for each point on the plane there corresponds an element of R<sup>2</sup> and conversely, to each element of R<sup>2</sup> there is a point in the plane. **It may be noted** that this association between points in the plane and the elements in R<sup>2</sup> is with respect to a given pair of axes. Thus given a point on the plane, if we change the chosen axes, the element in R<sup>2</sup> may be changed. Similarly, given an element in R<sup>2</sup>, if we change the chosen axes, a different point on the plane may be obtained.<br>
In the same manner, R and R<sup>3</sup> can be identified with the line and space respectively. Such a visualization is not possible for R<sup>n</sup> , for n>3.

**3. Math Model of Line, Plane and Space:**
The one-to-one correspondence between the plane and R<sup>2</sup>, described above provides an identification of plane with R<sup>2</sup>. Therefore R<sup>2</sup> serves as a mathematical model for the study of the plane. Similarly, R and R<sup>3</sup> serve as mathematical models for the study of the line and the space, respectively.

**4. Vector Representation:**
Let P be a point in the given Fig.1. Let (u, v) be the corresponding ordered pair. The line segment joining the origin and the point directed towards the point is called the vector at the origin associated with the point P. Please see the diagram given below.

 ![Vector Representation](images/exp1newimage.jpeg "Vector Represntation")

**5. n-dimensional Euclidean Space:**
 It is the system ( R<sup>n</sup> , + , . ) together with R, where R<sup>n</sup> = {(x<sub>1</sub>, x<sub>2</sub>, x<sub>3</sub>, ... , x<sub>n</sub>) | x<sub>1</sub>, x<sub>2</sub>, x<sub>3</sub>, ... , x<sub>n</sub> ∈ R} and operations + and . called addition and scalar multiplication respectively are defined as:

**(i)** {(x<sub>1</sub>, x<sub>2</sub>, x<sub>3</sub>, ... , x<sub>n</sub>) + (y<sub>1</sub>, y<sub>2</sub>, y<sub>3</sub>, ... , y<sub>n</sub>) = (x<sub>1</sub>+y<sub>1</sub> , x<sub>2</sub>+y<sub>2</sub> , ... , x<sub>n</sub>+y<sub>n</sub>)}; where (x<sub>1</sub>, x<sub>2</sub>, x<sub>3</sub>, ... , x<sub>n</sub>) , (y<sub>1</sub>, y<sub>2</sub>, y<sub>3</sub>, ... , y<sub>n</sub>) ∈ R<sup>n</sup> <br>
**(ii)** α . (x<sub>1</sub>, x<sub>2</sub>, x<sub>3</sub>, ... , x<sub>n</sub>) = (α.x<sub>1</sub>, α.x<sub>2</sub>, α.x<sub>3</sub>, ... , α.x<sub>n</sub>); where α ∈ R and (x<sub>1</sub>, x<sub>2</sub>, x<sub>3</sub>, ... , x<sub>n</sub>) ∈ R<sup>n</sup>

It can be geometrically visualised for 1≤n≤3 only. 

**6. Vector Space:**
 Let F=R or C, where C is set of complex numbers which is described below in Note (ii). Given a non-empty set V and operations "+" **(called addition)** and "." **(called scalar multiplication)**, the system (V , + , .) together with F is called a **vector space** over F, if the following conditions hold:

**For Addition:** <br>
&emsp; **i.** For each pair of elements x, y ∈ V, there is a unique element x + y ∈ V <br> 
&emsp; **ii.** Commutativity: x + y = y + x; for x, y ∈ V <br>
&emsp; **iii.** Associativity: (x + y) + z = x + (y + z), for x, y, z ∈ V <br>
&emsp; **iv.** Additive identity: There exists an element O ∈ V such that x + O = x, for x ∈ V.<br>
&emsp;  &emsp; This O which is the additive identity of (V, +), is called the zero of V and is denoted by 0.<br>
&emsp; **v.** Additive inverse: For every x ∈ V, there exists an element y ∈ V such that x + y = 0. This y is called the additive inverse of x and is denoted by -x.

**For Scalar Multiplication:** <br>
&emsp; **i.** For each x ∈ V and a ∈ F, there is a unique element a.x ∈ V <br>
&emsp; **ii.** Associativity: (ab).x = a.(bx) = x.(ab); for x ∈ V and a, b ∈ F. <br>
&emsp; **iii.** 1.x = x.1 = x, for x ∈ V, where 1 is the additive identity of F.

**Compatibility Conditions:** <br>
&emsp; **i.** Distributive Property 1: a.(x+y) = a.x + a.y; for x, y ∈ V and a ∈ F. <br> 
&emsp; **ii.** Distributive Property 2: (a+b).x = a.x + b.x; for x ∈ V and a, b ∈ F. 

**NOTE:** (i) The elements of F are called **scalars** and the elements of V are **vectors**. A vector space over F will be denoted by V.<br> 
(ii) Let C be the set of complex numbers and each of its elements is denoted by a+ib, where a, b∈R.  The operations ‘‘+’’ (addition), ‘‘.’’ (scalar multiplication) and ‘‘.’’ (multiplication) on C, defined as follows: <br> 
a. Addition: (a+ib)+(c+id)=((a+c)+(b+d)i), where (a+ib) and (c+id)∈C. <br> 
b. Scalar multiplication: α.(a+ib)=(α.a+α.ib), where α∈R and (a+ib)∈C. <br> 
c. Multiplication: (a+ib).(c+id)=(ac-bd+(bc+ad)i), where (a+ib) and (c+id)∈C.


**7. Example** <br>
&emsp; **i.** The system (R<sup>n</sup>, +, .) is a vector space over R, where addition and scalar multiplication are described above. The zero of this vector space is 0≡(0, 0, 0, …, 0). Thus elements of Rn are vectors and elements of R are scalars. In the particular case when n=1, elements of R are both vectors and scalars. <br>
&emsp; **ii.** The system (M<sup>2x2</sup>, +, .) is a vector space over R,<br>
 ![Matrix Image](images/exp1theoimg.png "Vector Represntation")
 
**iii.** The system (R<sup>2</sup>, +, .) is not a vector space over R, where operations addition and scalar multiplication are described as follows: (x, y)+(a, b)=(x+a, 0), where x, y, a, b&isin;R and c(x, y)=(cx, 0); where c, x, y&isin;R. Reason:  There does not exist (a, b) such that (2,1)+(a, b)=(2,1) because if exists, then (2+a, 0)=(2, 1) i.e. 0=1, a contradiction.  
 
**8. Properties**
Let V be a vector space over R. For v, w ∈ V and α ∈ F,

&emsp; **A.** 0.v = 0 <br>
&emsp;&emsp;   (0 on the left side is the zero of F and on the right side it is the zero of V) <br>
&emsp; **B.** α.v = 0 implies α = 0 or v = 0<br>
&emsp;&emsp;   (-1).x = -x, x ∈ V, -1 ∈ F<br> 
&emsp; **C.** α.v = α.w and α ≠ 0 implies v = w.<br>
&emsp; **D.** Notice that v.w and v.α are not defined.

**9. Significance**
The study of n-dimensional Euclidean space has enlightened research in many broad areas of science over the period of time. n-dimensional spaces have since become one of the foundations for formally expressing modern mathematics and physics.
