import{R as t}from"./iframe-CjAZXmgk.js";import{a as p}from"./isWellBehavedNumber-CbOfPh0Q.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-BbcZ1ZaH.js";import{R as T}from"./zIndexSlice-DZ6wU0kL.js";import{C as M}from"./CartesianGrid-Dv_tqLlh.js";import{X as $}from"./XAxis-XXYcX2bn.js";import{Y as I}from"./YAxis-CunYyPtb.js";import{L as O}from"./Legend-DMbKw1iM.js";import{T as W}from"./Tooltip-BMETZi0y.js";import{L as C}from"./Line-Bqm35VQZ.js";import{C as X}from"./Curve-BAdd7Cc7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B3dy_A6W.js";import"./RechartsWrapper-C1tX5Xq9.js";import"./axisSelectors-DVMe8D3h.js";import"./throttle-aHpS-uJF.js";import"./index-CXqdHhNs.js";import"./index-D72PX-EN.js";import"./d3-scale-Cdy5oRLL.js";import"./index-CgP4dGwF.js";import"./index-DoglCRE6.js";import"./renderedTicksSlice-DRvvM2hj.js";import"./index-jRxYEVM9.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bi3Tf3h4.js";import"./chartDataContext-Brj1C6P1.js";import"./CategoricalChart-ChU13xsV.js";import"./CartesianAxis-CNPqH8LV.js";import"./Layer-CMYvDThQ.js";import"./Text-VSZhuuVN.js";import"./pageBackground-CYQU4eM8.js";import"./useId-UofRKXbz.js";import"./useBackwardsCompatibleTheme-C26HYKO8.js";import"./Label-DnpXC07H.js";import"./ZIndexLayer-maUeBX7p.js";import"./types-BUTy-eCs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-uvqP7PSU.js";import"./symbol-DCSxYWeK.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B7ar2O_j.js";import"./uniqBy-DzMYEmyq.js";import"./iteratee-BZjhhQST.js";import"./useAnimationId-BxmhNVS4.js";import"./Cross-Mi64MTa2.js";import"./Rectangle-Cg0Vumjf.js";import"./util-Dxo8gN5i.js";import"./Sector-P4GUkmMC.js";import"./activeStyles-BjWwonc4.js";import"./dataEntryStyles-BHBmvArk.js";import"./ActivePoints-C5jmgdLT.js";import"./Dot-C4dqO9Kj.js";import"./ErrorBarContext-CzSreuRh.js";import"./GraphicalItemClipPath-uyo9nSDN.js";import"./SetGraphicalItem-D6iWzq9o.js";import"./getRadiusAndStrokeWidthFromDot-B3WoL_Uu.js";import"./ActiveShapeUtils-Lt_dXYUR.js";import"./useEffectiveDataKey-NmC8up5p.js";import"./step-DNHn4BEu.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
