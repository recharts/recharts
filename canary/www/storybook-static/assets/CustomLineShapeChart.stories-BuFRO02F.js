import{e as t}from"./iframe-Dt2-Rn2T.js";import{R as D,n as p}from"./arrayEqualityCheck-e3rdG8sZ.js";import{L as v}from"./LineChartArgs-C9Vp8FkW.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-Ct2spzHg.js";import{C as K}from"./CartesianGrid-BL4VMlI3.js";import{X as T}from"./XAxis-CRrkfAWq.js";import{Y as M}from"./YAxis-CkTVj5OB.js";import{L as $}from"./Legend-D3DE2sEM.js";import{T as O}from"./Tooltip-zi9iWAjn.js";import{L as C}from"./Line-BoGV8EYk.js";import{R as W}from"./RechartsHookInspector-5aSdxu_t.js";import{C as X}from"./Curve-Ff2ksW4t.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BoKEDzkZ.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-CBGhND_r.js";import"./hooks-DJKBhfj1.js";import"./axisSelectors-B_oLlWSB.js";import"./zIndexSlice-C1nzEFYS.js";import"./CartesianChart-B7uV6D3o.js";import"./chartDataContext-DW1Hpk6b.js";import"./CategoricalChart-Dpdb76Jr.js";import"./CartesianAxis-CuL6QCDl.js";import"./Layer-Cy-kS3Tn.js";import"./Text-Bi0muiqL.js";import"./DOMUtils-ngjC_q0v.js";import"./Label-C32CYHoq.js";import"./ZIndexLayer-RqzvM65R.js";import"./types-BU6HIYaW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-Cq9VSHhf.js";import"./useElementOffset-CUFeQ2ye.js";import"./iteratee-HLQGaxaB.js";import"./Cross-jy0XmrOG.js";import"./Rectangle-CbTbEpru.js";import"./useAnimationId-C5m05tY7.js";import"./Sector-D7OsKu7Y.js";import"./ReactUtils-OtSSiA15.js";import"./ActivePoints-DYpwLrvq.js";import"./Dot-yws4r2HM.js";import"./RegisterGraphicalItemId-BHPtgntX.js";import"./ErrorBarContext-Ds0jOqwg.js";import"./GraphicalItemClipPath-DzB0Slfu.js";import"./SetGraphicalItem-C72JWaDt.js";import"./getRadiusAndStrokeWidthFromDot-9ys3gSvC.js";import"./ActiveShapeUtils-d0cRIwlh.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-BtcZZN-I.js";import"./index-DBIfqZnx.js";import"./ChartSizeDimensions-CGKu1G21.js";import"./OffsetShower-Cg1AihHI.js";import"./PlotAreaShower-Byk-bE4C.js";const _t={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,S=m.length;a<S;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const g=(i.x-e.x)/r,u=(i.y-e.y)/r,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(r/h-1)),P=r/w;let s=h/2,{x:y,y:f}=e;for(;r-s>0;)r-=s,y+=g*s,f+=u*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),s=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
