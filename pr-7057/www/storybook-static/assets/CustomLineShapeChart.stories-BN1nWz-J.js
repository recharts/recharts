import{e as t}from"./iframe-6geHM4bd.js";import{R as D,i as s}from"./arrayEqualityCheck-Bhk4eC6b.js";import{L as v}from"./LineChartArgs-DJq4Pk8T.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-7HpR_HHs.js";import{C as K}from"./CartesianGrid-OsQE69dK.js";import{X as T}from"./XAxis-enChBe_S.js";import{Y as M}from"./YAxis-CyQoyaj5.js";import{L as $}from"./Legend-BCQ4i3bB.js";import{T as O}from"./Tooltip-BDkatYxu.js";import{L as C}from"./Line-jU53A7NC.js";import{R as W}from"./RechartsHookInspector-DIMVuZhQ.js";import{C as X}from"./Curve-CQuCDB0y.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CBsCUn_G.js";import"./immer-BHDsl4Gi.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CT-ler3b.js";import"./index-BthKVvnl.js";import"./hooks-DI5QNaPY.js";import"./axisSelectors-CkcbrWkF.js";import"./d3-scale-B4Y55H0h.js";import"./zIndexSlice-DbqCu4eM.js";import"./renderedTicksSlice-Q5iEeOyf.js";import"./CartesianChart-DcdXCHSt.js";import"./chartDataContext-C-mzylkg.js";import"./CategoricalChart-T8dvDJlI.js";import"./CartesianAxis-BqFoQr74.js";import"./Layer-AOnBAVLr.js";import"./Text--8GWbfGy.js";import"./DOMUtils-Bh7eQOMe.js";import"./Label-eYApNfXX.js";import"./ZIndexLayer-D_4fvMt1.js";import"./types-BNIhqt2v.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-D0fHlVEK.js";import"./symbol-D3KeBWn_.js";import"./step-DQP9UvLT.js";import"./useElementOffset-Yf81zrLa.js";import"./uniqBy-D0BLSQKW.js";import"./iteratee-Dsk_uIQJ.js";import"./useAnimationId-RNAT_shg.js";import"./Cross-DatCJvBD.js";import"./Rectangle-Upynic_t.js";import"./Sector-xROucIrP.js";import"./ReactUtils-DLbKFm0I.js";import"./ActivePoints-BxYhIeKT.js";import"./Dot-CxbLLsp7.js";import"./RegisterGraphicalItemId-CnRMZ_3g.js";import"./ErrorBarContext-D0w-EAob.js";import"./GraphicalItemClipPath-CLYl1R8a.js";import"./SetGraphicalItem-B9Yc_fe3.js";import"./getRadiusAndStrokeWidthFromDot-nLQDjczC.js";import"./ActiveShapeUtils-Bd1evmhL.js";import"./isPlainObject-BrUI-U16.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-COJp5Zhq.js";import"./index-W9fTJ1Ap.js";import"./ChartSizeDimensions-ZcxWch0o.js";import"./OffsetShower-D1XTDPFK.js";import"./PlotAreaShower-BWZPams-.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
