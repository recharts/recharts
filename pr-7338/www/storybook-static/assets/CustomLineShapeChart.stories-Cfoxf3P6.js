import{e as t}from"./iframe-DWlBD4sR.js";import{g as R,I as s}from"./arrayEqualityCheck-CNEGbaey.js";import{L as v}from"./LineChartArgs-_mND0tRp.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-DPte-9pC.js";import{L as A}from"./LineChart-DXYsUPou.js";import{C as T}from"./CartesianGrid-Bo9r6Jbp.js";import{X as M}from"./XAxis-DqK7mhYD.js";import{Y as $}from"./YAxis-DjNbHZXF.js";import{L as O}from"./Legend-BKRXt4LC.js";import{T as W}from"./Tooltip-CcFiZV60.js";import{L as C}from"./Line--2TgE6AZ.js";import{R as X}from"./RechartsHookInspector-BbwGamUB.js";import{C as Y}from"./Curve-DtQybK0o.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CNcUKtS8.js";import"./immer-DA_Y9NxP.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-qpXHOlBt.js";import"./index-CG7DpBSc.js";import"./hooks-OMlNr05X.js";import"./axisSelectors-CpE3e6Wf.js";import"./d3-scale-M7VTsA4f.js";import"./zIndexSlice-D96LA4yw.js";import"./renderedTicksSlice-ClpTcocu.js";import"./CartesianChart-C5Nu26yg.js";import"./chartDataContext-tYXX0vXe.js";import"./CategoricalChart-DhnxgrNh.js";import"./CartesianAxis-Mlw-1mLJ.js";import"./Layer-CBKkaEhK.js";import"./Text-DHQSj0lc.js";import"./DOMUtils-LgZ0OFlh.js";import"./Label-B7fwnDQB.js";import"./ZIndexLayer-CcFVuy64.js";import"./types-DufW0EQG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DVgdh6wF.js";import"./symbol-CoAVQGVr.js";import"./step-DBWpQbX9.js";import"./useElementOffset-DxOkvigD.js";import"./uniqBy-ClnHDv_J.js";import"./iteratee-cMSv06Nq.js";import"./useAnimationId-DeTKnBQG.js";import"./Cross-ePpt7APx.js";import"./Rectangle-q1bxg6yb.js";import"./Sector-DrZ87OSF.js";import"./ReactUtils-Bv-62o8T.js";import"./ActivePoints-BpXK1Sh9.js";import"./Dot-BNSrz3O7.js";import"./RegisterGraphicalItemId-D8G2PQ9m.js";import"./ErrorBarContext-PluNcskT.js";import"./GraphicalItemClipPath-fLehOmj-.js";import"./SetGraphicalItem-CmDlGunV.js";import"./getRadiusAndStrokeWidthFromDot-Df7nX_Vd.js";import"./ActiveShapeUtils-DFxf-U2C.js";import"./isPlainObject-Cg4BwvD8.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-DYkluK8E.js";import"./index-DfML4_6p.js";import"./ChartSizeDimensions-hqEEbS1-.js";import"./OffsetShower-DyOzfQGn.js";import"./PlotAreaShower-9P4lyNiw.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let a=1,S=p.length;a<S;++a){let b=0;const r=p[a-1],i=p[a];if(s(r.x)&&s(r.y)&&s(i.x)&&s(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,I=Math.abs(Math.floor(e/h-1)),P=e/I;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(Y,{...l}),d)},n={render:c=>t.createElement(R,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(M,{dataKey:"name"}),t.createElement($,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(X,null))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
