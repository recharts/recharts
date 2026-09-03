import{R as t}from"./iframe-DUU2nC7E.js";import{a as s}from"./isWellBehavedNumber-QUwuvSMb.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-wS31OQN-.js";import{R as T}from"./zIndexSlice-B1qxAnWW.js";import{C as M}from"./CartesianGrid-CxXvCrqh.js";import{X as $}from"./XAxis-C5ZNeLXM.js";import{Y as I}from"./YAxis-Ba7XqdaR.js";import{L as O}from"./Legend-DWw1TWPW.js";import{T as W}from"./Tooltip-BGrHqXpU.js";import{L as C}from"./Line-kXxR1dvE.js";import{C as X}from"./Curve-Dejht0kU.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BqMh5-lE.js";import"./RechartsWrapper-DlUPtncW.js";import"./axisSelectors-oYeY2Mwn.js";import"./throttle-DU8m77oh.js";import"./index-DfISOqFY.js";import"./index-BweKhhB8.js";import"./d3-scale-cKq8MwgY.js";import"./index-By0b-RMY.js";import"./index-BLrpc9iL.js";import"./renderedTicksSlice-CQmIW09G.js";import"./index-eVEWj-zV.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D01briWp.js";import"./chartDataContext-DFaXfB60.js";import"./CategoricalChart-CP242KCm.js";import"./CartesianAxis-D6Xv7Kst.js";import"./Layer-CpTHNZLk.js";import"./Text-Dq73j3Z8.js";import"./DOMUtils-CWtn717I.js";import"./useId-D3HKJv3C.js";import"./useBackwardsCompatibleTheme-i7diorAo.js";import"./Label-BpgemmXF.js";import"./ZIndexLayer-09JGIcjO.js";import"./types-D26lJf4n.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BDrFNT0n.js";import"./symbol-66LGfBly.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CVQocJ2R.js";import"./uniqBy-BjaaEqQ9.js";import"./iteratee-DLKh6RnP.js";import"./useAnimationId-Hor1kczP.js";import"./Cross-E50swgB7.js";import"./Rectangle-B0PZq1UN.js";import"./util-Dxo8gN5i.js";import"./Sector-otXYrezk.js";import"./AnimatedItems-CtOvBSOT.js";import"./ActivePoints-Wt40jbbC.js";import"./Dot-DSPh_RO_.js";import"./RegisterGraphicalItemId-DH-o1j-9.js";import"./ErrorBarContext-ql3O-cNM.js";import"./GraphicalItemClipPath-CFHEX7Zj.js";import"./SetGraphicalItem-DSRKMZ7M.js";import"./getRadiusAndStrokeWidthFromDot-D_T6WBHX.js";import"./ActiveShapeUtils-DXSvZ-3T.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./step-DsOIwvhZ.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let b=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Qt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Qt as __namedExportsOrder,Jt as default};
