import{e as t}from"./iframe-C-KAowuO.js";import{R as D,i as s}from"./arrayEqualityCheck-yVLbm2Ok.js";import{L as v}from"./LineChartArgs-E1uHAgXQ.js";import{g as I}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-CMvr_h7H.js";import{C as T}from"./CartesianGrid-BWWcddpx.js";import{X as M}from"./XAxis-BdDoMKhj.js";import{Y as $}from"./YAxis-WXeKSUTD.js";import{L as O}from"./Legend-T14zhhqr.js";import{T as W}from"./Tooltip-Cgd7-Xvc.js";import{L as C}from"./Line-G6dNKB2b.js";import{R as X}from"./RechartsHookInspector-CNWyvN3d.js";import{C as Y}from"./Curve-HzHLtdOZ.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D05KRY5H.js";import"./immer-lrri1Ibi.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DqKSuNH3.js";import"./index-KvyLAFD0.js";import"./hooks-DeKQ2gqZ.js";import"./axisSelectors-CE5Vd0Tc.js";import"./d3-scale-Bopu8Aci.js";import"./zIndexSlice-DrTp_sFl.js";import"./renderedTicksSlice-C1ShKB3N.js";import"./CartesianChart-nT9KcNTp.js";import"./chartDataContext-vxdgRKIh.js";import"./CategoricalChart-Ds0xAivg.js";import"./CartesianAxis-BZ3398ZK.js";import"./Layer-BbNCaHIe.js";import"./Text-Bcc2ZqXe.js";import"./DOMUtils-Cs_o0Y2m.js";import"./Label-D0CeoZx_.js";import"./ZIndexLayer-D6XED_N0.js";import"./types-B6CmVkmP.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DUxwWGdL.js";import"./symbol-DJcsyqFg.js";import"./step-BtXew3Rl.js";import"./useElementOffset-BnobsK-J.js";import"./uniqBy-CqIaJHYT.js";import"./iteratee-CaXP3rRs.js";import"./useAnimationId-TM9zYSCO.js";import"./Cross-L57-kPql.js";import"./Rectangle-BR805uQ0.js";import"./Sector-WUHOr-1w.js";import"./ReactUtils-CCkd_fXV.js";import"./ActivePoints-DwGdY9lY.js";import"./Dot-B1iig8sS.js";import"./RegisterGraphicalItemId-D73RknhP.js";import"./ErrorBarContext-DL4EJt22.js";import"./GraphicalItemClipPath-d-0sskKm.js";import"./SetGraphicalItem-DNbpLx8W.js";import"./getRadiusAndStrokeWidthFromDot-D7K-VjZE.js";import"./ActiveShapeUtils-Do01q8yT.js";import"./isPlainObject-QngjBi63.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-Db73yEci.js";import"./index-BQFUVKnT.js";import"./ChartSizeDimensions-DTvYXLHc.js";import"./OffsetShower-CVdVAOLR.js";import"./PlotAreaShower-ZPJ89wbY.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(Y,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(M,{dataKey:"name"}),t.createElement($,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(X,null))),args:{...I(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
