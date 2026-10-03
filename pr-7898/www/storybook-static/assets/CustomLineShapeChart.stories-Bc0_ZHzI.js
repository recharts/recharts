import{R as t}from"./iframe-DUCVYvuv.js";import{a as p}from"./isWellBehavedNumber-CHfaFS22.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-Sr_zIuoy.js";import{R as T}from"./zIndexSlice-Dv561aOb.js";import{C as M}from"./CartesianGrid-TluhHeGx.js";import{X as $}from"./XAxis-BzNdpJxM.js";import{Y as I}from"./YAxis-BmCbyRlC.js";import{L as O}from"./Legend-DX07trj6.js";import{T as W}from"./Tooltip-BdFBoleX.js";import{L as C}from"./Line-CtdXCtTz.js";import{C as X}from"./Curve-BYkQNACV.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DISImja8.js";import"./RechartsWrapper-iyGA1AMM.js";import"./axisSelectors-RihwrwLn.js";import"./throttle-DlYjiwaM.js";import"./index-Drz1YEgP.js";import"./index-BF0qlZzJ.js";import"./d3-scale-CipezK5C.js";import"./index-CU1FAq-q.js";import"./index-CF3yTXup.js";import"./renderedTicksSlice-DntZkvWg.js";import"./index-BB2mFlZ8.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CMoCj0lC.js";import"./chartDataContext-C_0AmvZE.js";import"./CategoricalChart-BDtogWEQ.js";import"./CartesianAxis-CN04VyAD.js";import"./Layer-BYf2Lf2_.js";import"./Text-BvxoaAi_.js";import"./DOMUtils-CzBz7LPB.js";import"./useId-B9VN3-ij.js";import"./useBackwardsCompatibleTheme-CPdPW8lT.js";import"./Label-BxNjUR8n.js";import"./ZIndexLayer-CTDLevub.js";import"./types-Bor8UPlE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Bt5KQad5.js";import"./symbol-DBVnIE4b.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BSSllVf1.js";import"./uniqBy-Xxc7DvXp.js";import"./iteratee-jOVAutlA.js";import"./useAnimationId-CVoiYc0t.js";import"./Cross-Bgmo4ZsB.js";import"./Rectangle-CSIdxSg9.js";import"./util-Dxo8gN5i.js";import"./Sector-EwYINvkJ.js";import"./AnimatedItems-BEYVhKcg.js";import"./ActivePoints-C4H58rGm.js";import"./Dot-BPs4QuN4.js";import"./RegisterGraphicalItemId-BxtMrAn2.js";import"./ErrorBarContext-DZk5Pr6Y.js";import"./GraphicalItemClipPath-AZa4GZWr.js";import"./SetGraphicalItem-CMStLvM8.js";import"./getRadiusAndStrokeWidthFromDot-BLrXq-Hf.js";import"./ActiveShapeUtils-Bh9qpD-D.js";import"./useGraphicalItemIdentity-BZb16S3a.js";import"./step-C8Z349xs.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height="100%">
        <LineChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Tooltip cursor={{
          stroke: 'gold',
          strokeWidth: 2
        }} defaultIndex={3} />
          <Line type="linear" dataKey="pv" stroke="#8884d8" activeDot={{
          r: 8
        }} shape={(payload: CurveProps) => <CustomLineShapeProps {...payload} tick={<circle r={5} fill="currentColor" />} />} />
          <Line type="linear" dataKey="uv" stroke="#82ca9d" shape={(payload: CurveProps) => <CustomLineShapeProps {...payload} tick={<rect x={-5} y={-5} width={10} height={10} fill="currentColor" />} />} />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LineChartArgs),
    width: 500,
    height: 300,
    data: pageData,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }
  }
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};export{s as CustomLineShapeChart,Qt as __namedExportsOrder,Jt as default};
