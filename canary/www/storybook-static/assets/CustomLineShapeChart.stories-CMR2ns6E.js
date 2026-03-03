import{e as t}from"./iframe-q7EKBh7o.js";import{R as D,i as s}from"./arrayEqualityCheck-CNeXmyp-.js";import{L as v}from"./LineChartArgs-DJq4Pk8T.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-DbNB-0Ji.js";import{C as K}from"./CartesianGrid-zerpxpsB.js";import{X as T}from"./XAxis-Cc06MLaN.js";import{Y as M}from"./YAxis-Dzu9zp52.js";import{L as $}from"./Legend-L2aYPyi0.js";import{T as O}from"./Tooltip-iTXI8B3b.js";import{L as C}from"./Line-BWfPW2C0.js";import{R as W}from"./RechartsHookInspector-DewVmCy0.js";import{C as X}from"./Curve-CMEBV0h5.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B7X7PXgS.js";import"./immer-so6Ulnev.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B22qLPQG.js";import"./index-C4-9aL-F.js";import"./hooks-BZKkCtfI.js";import"./axisSelectors-D3C9QRtF.js";import"./d3-scale-C3h6liLe.js";import"./zIndexSlice-FB6DIKIg.js";import"./renderedTicksSlice-egFijHun.js";import"./CartesianChart-B_NqAGOq.js";import"./chartDataContext-KwgMu4Lm.js";import"./CategoricalChart-BZ540HIN.js";import"./CartesianAxis-DgR0v-Eb.js";import"./Layer-QiojE74q.js";import"./Text-Df64Y-kP.js";import"./DOMUtils-CVphFinv.js";import"./Label-D0Yxhrga.js";import"./ZIndexLayer-CyDdrDhA.js";import"./types-8fLOkEDP.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BiDhCEPu.js";import"./symbol-BD_3EPYV.js";import"./step-BUn93TOQ.js";import"./useElementOffset-w_DRWkBd.js";import"./uniqBy-C9c8NOE5.js";import"./iteratee-DCcyxzVq.js";import"./useAnimationId-CVW780SS.js";import"./Cross-CsXDdVSc.js";import"./Rectangle-C9CBwic5.js";import"./Sector-CO_u1rWF.js";import"./ReactUtils-CCO8h_ST.js";import"./ActivePoints-DPbjwaD_.js";import"./Dot-DPAcQCLX.js";import"./RegisterGraphicalItemId-CxyJNLVz.js";import"./ErrorBarContext-B0wOEolD.js";import"./GraphicalItemClipPath-CMf4z5s0.js";import"./SetGraphicalItem-D3d8G_vE.js";import"./getRadiusAndStrokeWidthFromDot-D64HU0Nx.js";import"./ActiveShapeUtils-BUcYuJvN.js";import"./isPlainObject-DABaG52Q.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-C9zo0qDT.js";import"./index-z6UB51wB.js";import"./ChartSizeDimensions-xzO8bMu2.js";import"./OffsetShower-Dpn1KfVs.js";import"./PlotAreaShower-BRuQ0joF.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Qt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Qt as __namedExportsOrder,Jt as default};
