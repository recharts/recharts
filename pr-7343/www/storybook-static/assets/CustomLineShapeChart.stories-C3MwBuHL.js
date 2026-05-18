import{e as t}from"./iframe-CuZPGzPC.js";import{g as D,J as s}from"./arrayEqualityCheck-0ArgbeWo.js";import{L as v}from"./LineChartArgs-_mND0tRp.js";import{g as I}from"./utils-ePvtT4un.js";import{p as K}from"./Page-DPte-9pC.js";import{L as A}from"./LineChart-DsvJyj-x.js";import{C as T}from"./CartesianGrid-B0MSrHB_.js";import{X as M}from"./XAxis-BZ1tAbJs.js";import{Y as $}from"./YAxis-CPd7xvrx.js";import{L as O}from"./Legend-XZF75PN9.js";import{T as W}from"./Tooltip-erkhyRmN.js";import{L as C}from"./Line-Cco-oGoS.js";import{R as X}from"./RechartsHookInspector-zRKZmo0i.js";import{C as Y}from"./Curve-8oAwKTPO.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Bk_EQyDM.js";import"./immer-YqkYbV94.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B6XKG7Lc.js";import"./index-Cvyduo3w.js";import"./hooks-CtSYEaPh.js";import"./axisSelectors-DJmfaPi-.js";import"./d3-scale-DFAjRXo_.js";import"./zIndexSlice-BDdD7Z6D.js";import"./renderedTicksSlice-CZA7_M_S.js";import"./CartesianChart-DorQ2AK5.js";import"./chartDataContext-B0jZsWqF.js";import"./CategoricalChart-BXlLUI69.js";import"./CartesianAxis-CfFX5JcQ.js";import"./Layer-D8WyiXT0.js";import"./Text-zA_9GeJ1.js";import"./DOMUtils-BikjfFYx.js";import"./Label-zspUhklU.js";import"./ZIndexLayer-B4dYONTA.js";import"./types-DTMUikhY.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-B_rDkX2s.js";import"./symbol-DmWPr50b.js";import"./step-CqiKd4MR.js";import"./useElementOffset--JMWPKnm.js";import"./uniqBy-BObUix_R.js";import"./iteratee-IIg4RS-w.js";import"./useAnimationId-CevvSFVo.js";import"./Cross-CDHBbcwn.js";import"./Rectangle-DjKAtsYL.js";import"./Sector-CPKMPiIf.js";import"./ReactUtils-G6cK3lSP.js";import"./ActivePoints-3HxEsaWV.js";import"./Dot-BETACs3N.js";import"./RegisterGraphicalItemId-Bjl2IzLe.js";import"./ErrorBarContext-BiThez5i.js";import"./GraphicalItemClipPath-DUbxYwTC.js";import"./SetGraphicalItem-B2q_jALm.js";import"./getRadiusAndStrokeWidthFromDot-CXvTaXSz.js";import"./ActiveShapeUtils-CX1NIdn4.js";import"./isPlainObject-C_gHiSxR.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-CG3AkdCU.js";import"./index-D_0WpHmK.js";import"./ChartSizeDimensions-Dt2wwaf3.js";import"./OffsetShower-D-8ojbsk.js";import"./PlotAreaShower-D985qYJk.js";const zt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let a=1,S=p.length;a<S;++a){let b=0;const r=p[a-1],i=p[a];if(s(r.x)&&s(r.y)&&s(i.x)&&s(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(Y,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(M,{dataKey:"name"}),t.createElement($,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(X,null))),args:{...I(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
