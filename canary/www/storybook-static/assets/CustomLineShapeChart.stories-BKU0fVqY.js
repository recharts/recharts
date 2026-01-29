import{e as t}from"./iframe-BlWijLqW.js";import{R as D,n as p}from"./arrayEqualityCheck-wpbGPGp4.js";import{L as v}from"./LineChartArgs-p69byTpd.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-C0Qg0FEM.js";import{C as K}from"./CartesianGrid-DlT4qS99.js";import{X as T}from"./XAxis-OLUbmSHc.js";import{Y as M}from"./YAxis-DCz5GEme.js";import{L as $}from"./Legend-C9QWxv1R.js";import{T as O}from"./Tooltip-CvfY5XaH.js";import{L as C}from"./Line--NudrrhR.js";import{R as W}from"./RechartsHookInspector-DmBYfqJt.js";import{C as X}from"./Curve-DR-_MvJg.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BXixkRdf.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-DVoFofdD.js";import"./hooks-Bq9gEA3Y.js";import"./axisSelectors-BcyrPMqb.js";import"./zIndexSlice-CAH7mPZ1.js";import"./CartesianChart-B-NzXiwJ.js";import"./chartDataContext-Bi-RwErn.js";import"./CategoricalChart-yeAYRiqJ.js";import"./CartesianAxis-Bh0UbraM.js";import"./Layer-3MYXWHxJ.js";import"./Text-zHguMFUU.js";import"./DOMUtils-DB8eToSF.js";import"./Label-Df_5RPeD.js";import"./ZIndexLayer-CJd84X-g.js";import"./types-CMl5R0ed.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BEH-AFaJ.js";import"./useElementOffset-CyDDhNEE.js";import"./iteratee-DmHclTd9.js";import"./Cross-BW--vN7Z.js";import"./Rectangle-IDnxfDb1.js";import"./useAnimationId-B1CL6Xpk.js";import"./Sector-BYlteXBh.js";import"./ReactUtils-CbcjOK7p.js";import"./ActivePoints-JWw26lZk.js";import"./Dot-D4efsgOa.js";import"./RegisterGraphicalItemId-CGPZoT1R.js";import"./ErrorBarContext-uU_zcojk.js";import"./GraphicalItemClipPath-C9wWAhjz.js";import"./SetGraphicalItem-UAqbhtt1.js";import"./getRadiusAndStrokeWidthFromDot-CWn6u2wW.js";import"./ActiveShapeUtils-CPx9BhWQ.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-B75mUvLe.js";import"./index-BlR-9DJp.js";import"./ChartSizeDimensions-CSi05Yh4.js";import"./OffsetShower-C6MwKWid.js";import"./PlotAreaShower-BWRdXOpl.js";const _t={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,S=m.length;a<S;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const g=(i.x-e.x)/r,u=(i.y-e.y)/r,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(r/h-1)),P=r/w;let s=h/2,{x:y,y:f}=e;for(;r-s>0;)r-=s,y+=g*s,f+=u*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),s=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const jt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,jt as __namedExportsOrder,_t as default};
