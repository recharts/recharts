import{e as t}from"./iframe-OJf-GSLb.js";import{g as D,J as p}from"./arrayEqualityCheck-2_Nd0mNT.js";import{L as v}from"./LineChartArgs-_mND0tRp.js";import{g as I}from"./utils-ePvtT4un.js";import{p as K}from"./Page-DPte-9pC.js";import{L as A}from"./LineChart-Df79VPbd.js";import{C as T}from"./CartesianGrid-DvtIPyjz.js";import{X as M}from"./XAxis-CUozMhVT.js";import{Y as $}from"./YAxis-DlvLAsVD.js";import{L as O}from"./Legend-BrKSycFF.js";import{T as W}from"./Tooltip-D5pa3gQj.js";import{L as C}from"./Line-CxGxpbK3.js";import{R as X}from"./RechartsHookInspector-DjyNDFMe.js";import{C as Y}from"./Curve-Cdrr4XTN.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BhVQCFaS.js";import"./immer-fAzYVHYH.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-3Zay038b.js";import"./index-DjZjz4Db.js";import"./hooks-CH3cPIGX.js";import"./axisSelectors-kxctmjqQ.js";import"./d3-scale-DxGCPbiE.js";import"./zIndexSlice-CRdCk5dL.js";import"./renderedTicksSlice-DYga_drD.js";import"./CartesianChart-CJkqFERC.js";import"./chartDataContext-NT00FYUd.js";import"./CategoricalChart-BCcW9_uy.js";import"./CartesianAxis-Bqyi-QIr.js";import"./Layer-DtNuGt5z.js";import"./Text-ArxOC8oM.js";import"./DOMUtils-CMlg3GAM.js";import"./Label-B3MBaUXp.js";import"./ZIndexLayer-BJFmSDw9.js";import"./types-DpddDWMl.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-Cdsrrpbe.js";import"./symbol-xNgab6R1.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DO9IDGjg.js";import"./uniqBy-ChVqF39z.js";import"./iteratee-CbbfjsHA.js";import"./useAnimationId-Dwrr6l_F.js";import"./Cross-HUeICnQz.js";import"./Rectangle-5xuYXul5.js";import"./Sector-CS_Hom6q.js";import"./ReactUtils-CyupdVou.js";import"./ActivePoints-C9vqSoFh.js";import"./Dot-brDQHNAJ.js";import"./RegisterGraphicalItemId-BFbrCMwR.js";import"./ErrorBarContext-A27a6g1h.js";import"./GraphicalItemClipPath-QzIzaY2E.js";import"./SetGraphicalItem-B_Nz5Xvt.js";import"./getRadiusAndStrokeWidthFromDot-CpS1-IJD.js";import"./ActiveShapeUtils-CU2HJa4X.js";import"./index-DD4xdMms.js";import"./ChartSizeDimensions-CdI027Rl.js";import"./OffsetShower-BkR-_nsI.js";import"./PlotAreaShower-BECDt9HM.js";import"./step-4r8B6sQi.js";const Nt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:s}=l,d=[];if(s)for(let a=1,S=s.length;a<S;++a){let b=0;const r=s[a-1],i=s[a];if(p(r.x)&&p(r.y)&&p(i.x)&&p(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(Y,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(M,{dataKey:"name"}),t.createElement($,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(X,null))),args:{...I(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const qt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,qt as __namedExportsOrder,Nt as default};
