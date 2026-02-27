import{e as t}from"./iframe-Dd1Sjt9X.js";import{R as D,i as s}from"./arrayEqualityCheck-pUdtrDKv.js";import{L as v}from"./LineChartArgs-DJq4Pk8T.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-DzeQZTBs.js";import{C as K}from"./CartesianGrid-VgSpPdk9.js";import{X as T}from"./XAxis-BYGa6kOu.js";import{Y as M}from"./YAxis-BRdJhjsx.js";import{L as $}from"./Legend-Cqiyijne.js";import{T as O}from"./Tooltip-BaKcSW8R.js";import{L as C}from"./Line-BfTN-7xH.js";import{R as W}from"./RechartsHookInspector-Cr2Johcx.js";import{C as X}from"./Curve-DCc30kqb.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C6lHiyqW.js";import"./immer-ezkOMCj7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dw3RQG7d.js";import"./index-DHxloPwC.js";import"./hooks-CKgsmzQh.js";import"./axisSelectors-DCUpOlmc.js";import"./d3-scale-BBdKeTjL.js";import"./zIndexSlice-B2TlWuzN.js";import"./renderedTicksSlice-DDOiTdbf.js";import"./CartesianChart-BimCUxdh.js";import"./chartDataContext-CLOoHHQa.js";import"./CategoricalChart-CU3zaaGt.js";import"./CartesianAxis-CovsPuDZ.js";import"./Layer-CX4gucce.js";import"./Text-Cl6XBoxV.js";import"./DOMUtils-BIFKO-UG.js";import"./Label-ByOVYkgq.js";import"./ZIndexLayer-nfwFwrW8.js";import"./types-5Z667yyH.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-nv82Msvy.js";import"./symbol-DU1W-Oc6.js";import"./step-3UMSkQg1.js";import"./useElementOffset-BjCP6cea.js";import"./uniqBy-DVrqLngK.js";import"./iteratee-DQ3FPWwk.js";import"./useAnimationId-ax-iI9cP.js";import"./Cross-DvE5CAZT.js";import"./Rectangle-ChXOGBDT.js";import"./Sector-C-MT-tlR.js";import"./ReactUtils-0A2SPQqI.js";import"./ActivePoints-DahGmIAZ.js";import"./Dot-BMZXiNKw.js";import"./RegisterGraphicalItemId-Cz8x82sR.js";import"./ErrorBarContext-L_IEZQFq.js";import"./GraphicalItemClipPath-DOJdP2rh.js";import"./SetGraphicalItem-DT-0SkIe.js";import"./getRadiusAndStrokeWidthFromDot-DKdUNLBw.js";import"./ActiveShapeUtils-DgMKp2OJ.js";import"./isPlainObject-Dk8iq51s.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-XW4nj9Uq.js";import"./index-CAwGKYht.js";import"./ChartSizeDimensions-CyTaJmPr.js";import"./OffsetShower-BM6oyifk.js";import"./PlotAreaShower-D-MhE31R.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
