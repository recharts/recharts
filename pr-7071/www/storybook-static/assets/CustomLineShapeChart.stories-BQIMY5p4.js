import{e as t}from"./iframe-BKMt6m5h.js";import{R as D,i as s}from"./arrayEqualityCheck-DKiSJyxs.js";import{L as v}from"./LineChartArgs-DJq4Pk8T.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-Dum4Cbo_.js";import{C as K}from"./CartesianGrid-_qyEGuWy.js";import{X as T}from"./XAxis-CDLcqOUJ.js";import{Y as M}from"./YAxis-BewdCXRw.js";import{L as $}from"./Legend-DSw_VX6C.js";import{T as O}from"./Tooltip-7r_hEISl.js";import{L as C}from"./Line-CxUnuEFd.js";import{R as W}from"./RechartsHookInspector-C8vh1C69.js";import{C as X}from"./Curve-CIJPKaTL.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DRqv39RM.js";import"./immer-119-Vx0I.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CBmXgxrR.js";import"./index-0ICx_Jh1.js";import"./hooks-CVLKfhqZ.js";import"./axisSelectors-_eXkUPwd.js";import"./d3-scale-eFzonIBi.js";import"./zIndexSlice-C-hcpEb_.js";import"./renderedTicksSlice-CoSXmQJE.js";import"./CartesianChart-DIHhcgBc.js";import"./chartDataContext-BHrrZZEw.js";import"./CategoricalChart-BQZ3b4pY.js";import"./CartesianAxis-BvH7Qvln.js";import"./Layer-C7IPz0M5.js";import"./Text-DA8ucQjy.js";import"./DOMUtils-AZdfoklW.js";import"./Label-COa6_klK.js";import"./ZIndexLayer-BVz5K0QN.js";import"./types-CWEN2hKj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DEMmgvtO.js";import"./symbol-Mq3R2Ynh.js";import"./step-q1byNl46.js";import"./useElementOffset-FwvcWI3b.js";import"./uniqBy-CJDeFpd1.js";import"./iteratee-BA49Xtzo.js";import"./useAnimationId-CMiOk1pX.js";import"./Cross-D82pKC1H.js";import"./Rectangle-B_C8hcZh.js";import"./Sector-_bf6LJcr.js";import"./ReactUtils-ChQm2gA4.js";import"./ActivePoints-DcGeiB2-.js";import"./Dot-D-9lW8I7.js";import"./RegisterGraphicalItemId-Cr9Zp2xj.js";import"./ErrorBarContext-CYXSxlYD.js";import"./GraphicalItemClipPath-DfzX8699.js";import"./SetGraphicalItem-DCaX05zE.js";import"./getRadiusAndStrokeWidthFromDot-Cc011FPr.js";import"./ActiveShapeUtils-CFZSnkxp.js";import"./isPlainObject-7Y5kwcXL.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-Cs1O72ba.js";import"./index-CM5FbTKx.js";import"./ChartSizeDimensions-DMUyiIA2.js";import"./OffsetShower-r91l4zph.js";import"./PlotAreaShower-Sm9yLIMv.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
