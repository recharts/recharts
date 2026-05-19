import{e as t}from"./iframe-cnMzeIJZ.js";import{g as D,J as s}from"./arrayEqualityCheck-Diz3n3Hs.js";import{L as v}from"./LineChartArgs-_mND0tRp.js";import{g as I}from"./utils-ePvtT4un.js";import{p as K}from"./Page-DPte-9pC.js";import{L as A}from"./LineChart-iDd8MFWH.js";import{C as T}from"./CartesianGrid-CO8TK7fT.js";import{X as M}from"./XAxis-CwsNG3zV.js";import{Y as $}from"./YAxis-DADsk3iq.js";import{L as O}from"./Legend-2gzXd1Ey.js";import{T as W}from"./Tooltip-DNhbjbIV.js";import{L as C}from"./Line-DNc1zXXh.js";import{R as X}from"./RechartsHookInspector-z-0196Jh.js";import{C as Y}from"./Curve-BYV27PWl.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BJEUNe0z.js";import"./immer-CEVvpJh0.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-9N_K_8iJ.js";import"./index-DcitoB6s.js";import"./hooks-DbNIViQP.js";import"./axisSelectors-JTUQkC92.js";import"./d3-scale-BBoVmphj.js";import"./zIndexSlice-KCSxBezz.js";import"./renderedTicksSlice-CttqerD-.js";import"./CartesianChart-v4VQpoAp.js";import"./chartDataContext-DuCir45J.js";import"./CategoricalChart-CbexdhNs.js";import"./CartesianAxis-DKEuyvio.js";import"./Layer-C2d9GIhW.js";import"./Text-B1T-uFVD.js";import"./DOMUtils-8Qso1Lek.js";import"./Label-r0BVcH36.js";import"./ZIndexLayer-DgSpDsSo.js";import"./types-CvoSDie4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-zGmBpapW.js";import"./symbol-CLamLFlr.js";import"./step-CVx5i_lR.js";import"./useElementOffset-DUk4lhRc.js";import"./uniqBy-CkPNX-V7.js";import"./iteratee-D0L7wdlz.js";import"./useAnimationId-BIlplKMu.js";import"./Cross-DtQ6Ys6s.js";import"./Rectangle-DXYQFJg_.js";import"./Sector-q4gGdICU.js";import"./ReactUtils-Cvax_Sun.js";import"./ActivePoints-BF7AMWlG.js";import"./Dot-CuCyL62Q.js";import"./RegisterGraphicalItemId-CKB_e_SX.js";import"./ErrorBarContext-UNWUxf6o.js";import"./GraphicalItemClipPath-D7TSUiOR.js";import"./SetGraphicalItem-CHoRTGzo.js";import"./getRadiusAndStrokeWidthFromDot-D1rOBQHf.js";import"./ActiveShapeUtils-gcJ89Q36.js";import"./isPlainObject-D33aVf8i.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-D7-33KRZ.js";import"./index-CSSLHj9Z.js";import"./ChartSizeDimensions-BiOnGwPS.js";import"./OffsetShower-BBJcAEb8.js";import"./PlotAreaShower-C0UNL5CH.js";const zt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let a=1,S=p.length;a<S;++a){let b=0;const r=p[a-1],i=p[a];if(s(r.x)&&s(r.y)&&s(i.x)&&s(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(Y,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(M,{dataKey:"name"}),t.createElement($,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(X,null))),args:{...I(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Qt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Qt as __namedExportsOrder,zt as default};
