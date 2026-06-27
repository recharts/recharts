import{R as t}from"./iframe-D4-JHLuy.js";import{a as p}from"./isWellBehavedNumber-c1UrbL-U.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-BJNJG0hz.js";import{R as T}from"./zIndexSlice-Bl2qFY1A.js";import{C as M}from"./CartesianGrid-QY_EBeYm.js";import{X as $}from"./XAxis-N0htLXAu.js";import{Y as I}from"./YAxis-CC97e3o5.js";import{L as O}from"./Legend-Bw66eS2q.js";import{T as W}from"./Tooltip-meMb5WjK.js";import{L as C}from"./Line-BkdrkySx.js";import{C as X}from"./Curve-CDHj8CQ7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Bi1X6SaN.js";import"./resolveDefaultProps-EHkzfb1T.js";import"./RechartsWrapper-DcHNLFvh.js";import"./index-CeIhzw3-.js";import"./index-BhPwJBge.js";import"./index-CU6oIHEI.js";import"./index-CTDSjMzl.js";import"./immer-M-cM6uYj.js";import"./renderedTicksSlice-CQdRGRjO.js";import"./axisSelectors-BZHqEull.js";import"./d3-scale-DE_Hgqpo.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DqNanfGA.js";import"./chartDataContext-CvNOo9hu.js";import"./CategoricalChart-D1W7mN8j.js";import"./CartesianAxis-Da1hp6ds.js";import"./Layer-DnbVmNuk.js";import"./Text-hRlne3oO.js";import"./DOMUtils-BF23epo9.js";import"./Label-Dbayb2l5.js";import"./ZIndexLayer-BIs2Zanq.js";import"./types-B4cCoOJo.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-C6h_j7RC.js";import"./symbol-CTVt6zDq.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C5ufnYD8.js";import"./uniqBy-P4FasXrF.js";import"./iteratee-DvCHZIMY.js";import"./useAnimationId-v_oz9FgZ.js";import"./Cross-D94un-X_.js";import"./Rectangle-BxeEDcjB.js";import"./util-Dxo8gN5i.js";import"./Sector-C6wPNvhw.js";import"./AnimatedItems-BaefG7CY.js";import"./ActivePoints-CUhH8-xa.js";import"./Dot-ColQ7WFS.js";import"./RegisterGraphicalItemId-D8VEn74g.js";import"./ErrorBarContext-eSnspfxP.js";import"./GraphicalItemClipPath-DMJ0OWmb.js";import"./SetGraphicalItem-CpRH4JNE.js";import"./getRadiusAndStrokeWidthFromDot-5SFlDmNV.js";import"./ActiveShapeUtils-DA9DBhpV.js";import"./step-DP0d975A.js";const Bt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:s}=l,d=[];if(s)for(let a=1,S=s.length;a<S;++a){let b=0;const r=s[a-1],i=s[a];if(p(r.x)&&p(r.y)&&p(i.x)&&p(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Nt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Nt as __namedExportsOrder,Bt as default};
