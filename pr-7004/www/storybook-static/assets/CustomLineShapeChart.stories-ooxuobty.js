import{e as t}from"./iframe-8rINPBCK.js";import{R as D,n as p}from"./arrayEqualityCheck-C3wBHH11.js";import{L as v}from"./LineChartArgs-DJq4Pk8T.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-D7nyU6p6.js";import{C as K}from"./CartesianGrid-jtKOKpn1.js";import{X as T}from"./XAxis-rjkohJgP.js";import{Y as M}from"./YAxis-CTYabjHl.js";import{L as $}from"./Legend-6K_8fDBA.js";import{T as O}from"./Tooltip-C0vCUnAp.js";import{L as C}from"./Line-Cdkk60tb.js";import{R as W}from"./RechartsHookInspector-DhGNdH08.js";import{C as X}from"./Curve-D7sQ6QWi.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-wjmL_qr9.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C_hkcN4D.js";import"./hooks-Bk__qHm-.js";import"./axisSelectors-CvWz5XTo.js";import"./zIndexSlice-DaWAVY1S.js";import"./CartesianChart-BO1mb6Fl.js";import"./chartDataContext-Djz4dVa4.js";import"./CategoricalChart-_BatnBQS.js";import"./CartesianAxis-DTB3wekJ.js";import"./Layer-rS2qKox4.js";import"./Text-aD2aJQms.js";import"./DOMUtils-CWnqia8Q.js";import"./Label-CPR5zbup.js";import"./ZIndexLayer-BIlvRP3G.js";import"./types-BtRlzhwr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CLShZ5Ps.js";import"./useElementOffset-XeKITz-u.js";import"./iteratee-CK2LdAr9.js";import"./Cross-jTFVIBga.js";import"./Rectangle-CeeZo8YN.js";import"./useAnimationId-D141hJYN.js";import"./Sector-C71MUP7Q.js";import"./ReactUtils-BygGLMXM.js";import"./ActivePoints-BLBDxNan.js";import"./Dot-DDl1biMb.js";import"./RegisterGraphicalItemId-BjvKjhdQ.js";import"./ErrorBarContext-CL1XlF2D.js";import"./GraphicalItemClipPath-BLYpZTZk.js";import"./SetGraphicalItem-DdHorGvs.js";import"./getRadiusAndStrokeWidthFromDot-K8DspZJi.js";import"./ActiveShapeUtils-BOQsXSI9.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-CwrzKYaP.js";import"./index--Y6JWCN_.js";import"./ChartSizeDimensions-CAkoMsi5.js";import"./OffsetShower-CYXSrIBv.js";import"./PlotAreaShower-PTRY2LvG.js";const _t={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,S=m.length;a<S;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const g=(i.x-e.x)/r,u=(i.y-e.y)/r,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(r/h-1)),P=r/w;let s=h/2,{x:y,y:f}=e;for(;r-s>0;)r-=s,y+=g*s,f+=u*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),s=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
