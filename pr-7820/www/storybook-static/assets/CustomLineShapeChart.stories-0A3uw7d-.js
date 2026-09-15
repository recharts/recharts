import{R as t}from"./iframe-tthEZROf.js";import{a as p}from"./isWellBehavedNumber-CJmmz2h5.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-uJGwQmrK.js";import{R as T}from"./zIndexSlice-x-BIVIBz.js";import{C as M}from"./CartesianGrid-B43r-LYt.js";import{X as $}from"./XAxis-Bbu_Ekv_.js";import{Y as I}from"./YAxis-KrW21LMm.js";import{L as O}from"./Legend-bPUwjHrk.js";import{T as W}from"./Tooltip-DyGDdvsZ.js";import{L as C}from"./Line-BUFwOwbb.js";import{C as X}from"./Curve-SLfcRw16.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps--ww6vB9W.js";import"./RechartsWrapper-CTnk9UBm.js";import"./axisSelectors-CCMb6f1X.js";import"./throttle-DytOPEyf.js";import"./index-DkFq0gE6.js";import"./index-oZ0OTb3C.js";import"./d3-scale-De6zhOSb.js";import"./index-BVTzxVB3.js";import"./index-CqetqEae.js";import"./renderedTicksSlice-CpQrC_np.js";import"./index-DkBTTuWT.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DQWCoQde.js";import"./chartDataContext-D6MYvejF.js";import"./CategoricalChart-BHtoZx7C.js";import"./CartesianAxis-CWFnwULO.js";import"./Layer-B-lEtj28.js";import"./Text-Cxp0AK4z.js";import"./DOMUtils-CUwo8lte.js";import"./useId-5DCloKRu.js";import"./useBackwardsCompatibleTheme-p9GfZJFz.js";import"./Label-43myQ-K3.js";import"./ZIndexLayer-3Td9gWAI.js";import"./types-DSfbGXGs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DaT7FtPk.js";import"./symbol-DH-R-VAg.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CHhkCNTB.js";import"./uniqBy-OYgoWVS3.js";import"./iteratee-BwpdS3Kb.js";import"./useAnimationId-DDIADmfd.js";import"./Cross-RUdD4q_P.js";import"./Rectangle-C1nwJrSX.js";import"./util-Dxo8gN5i.js";import"./Sector-CAUb_Pxk.js";import"./AnimatedItems-D4IOxZdb.js";import"./ActivePoints-CeSECBNu.js";import"./Dot-9TYH62xU.js";import"./RegisterGraphicalItemId-3Sw_ADlZ.js";import"./ErrorBarContext-DMolzGnE.js";import"./GraphicalItemClipPath-CGwPa5y8.js";import"./SetGraphicalItem-DjBM1G-g.js";import"./getRadiusAndStrokeWidthFromDot-CkbsG5Hk.js";import"./ActiveShapeUtils--TNHR6BT.js";import"./useGraphicalItemIdentity-C5skwmjT.js";import"./step-BTKEfH_z.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
