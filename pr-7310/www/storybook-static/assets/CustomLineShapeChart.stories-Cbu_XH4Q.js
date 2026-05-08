import{e as t}from"./iframe-ZnuiNVaE.js";import{R as D,i as s}from"./arrayEqualityCheck-DcpsFffb.js";import{L as v}from"./LineChartArgs-E1uHAgXQ.js";import{g as I}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-I-sqc6q8.js";import{C as T}from"./CartesianGrid-OuGMHBup.js";import{X as M}from"./XAxis-hfxAoNer.js";import{Y as $}from"./YAxis-Diz2Tspw.js";import{L as O}from"./Legend-Ki2DFXnv.js";import{T as W}from"./Tooltip-CC2AIUKK.js";import{L as C}from"./Line-UlckhZvH.js";import{R as X}from"./RechartsHookInspector-C4iarVXO.js";import{C as Y}from"./Curve-D7bzhexe.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-SpwOLF2r.js";import"./immer-0nSCgAvg.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CEYGVzUm.js";import"./index-BpNZQyS5.js";import"./hooks-B5VA8Mmq.js";import"./axisSelectors-B7fsKZ9l.js";import"./d3-scale-CY4nDl51.js";import"./zIndexSlice-Drs2c4sD.js";import"./renderedTicksSlice-Bn9JwHxd.js";import"./CartesianChart-QqWjed8q.js";import"./chartDataContext-DOw2_YIC.js";import"./CategoricalChart-Bp3TzfC0.js";import"./CartesianAxis-90i_fguh.js";import"./Layer-3YLDlAyc.js";import"./Text-CLHYbH4R.js";import"./DOMUtils-DTgaodk1.js";import"./Label-CBQ7F7ZY.js";import"./ZIndexLayer-BzV-T_Iz.js";import"./types-mDbQPIQK.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-D3ZFSmHu.js";import"./symbol-DOh64DiI.js";import"./step-BAeuU6ZP.js";import"./useElementOffset-DfXBdw7O.js";import"./uniqBy-C1Nplgu-.js";import"./iteratee-CLm8sMEH.js";import"./useAnimationId-DkOya059.js";import"./Cross-C4WVnIN-.js";import"./Rectangle-8PzQF5cj.js";import"./Sector-BJWLe057.js";import"./ReactUtils-DWDhNlKk.js";import"./ActivePoints-CsKFQX5w.js";import"./Dot-DOC-EnTU.js";import"./RegisterGraphicalItemId-BcaLYkaD.js";import"./ErrorBarContext-C1ZpfKHJ.js";import"./GraphicalItemClipPath-C75obMCp.js";import"./SetGraphicalItem-CLIyGsmN.js";import"./getRadiusAndStrokeWidthFromDot-CVCMuq1B.js";import"./ActiveShapeUtils-B0-GYp8s.js";import"./isPlainObject-Bh5udtth.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-BzAzl90f.js";import"./index-BWgKuq9M.js";import"./ChartSizeDimensions-CpD-sUWL.js";import"./OffsetShower-B_CY-ece.js";import"./PlotAreaShower-DfogOd1z.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(Y,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(M,{dataKey:"name"}),t.createElement($,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(X,null))),args:{...I(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
