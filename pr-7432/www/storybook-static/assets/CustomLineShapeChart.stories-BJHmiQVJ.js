import{R as t}from"./iframe-B2GUem4R.js";import{a as p}from"./isWellBehavedNumber-Dny2ojXK.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-DE-X5Rmo.js";import{R as T}from"./zIndexSlice-CZi7E6fW.js";import{C as M}from"./CartesianGrid-H72cR-oI.js";import{X as $}from"./XAxis-CFUeYXnK.js";import{Y as I}from"./YAxis-_CiWUi77.js";import{L as O}from"./Legend-Bhh8SQ-f.js";import{T as W}from"./Tooltip-AZ9IybMD.js";import{L as C}from"./Line-p1FLjwlJ.js";import{C as X}from"./Curve-TtTpS3RF.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Dz6Q_sAk.js";import"./resolveDefaultProps-D8aANFv1.js";import"./RechartsWrapper-wIT9NoUO.js";import"./index-CiX8zsFN.js";import"./index-CRfxI4mA.js";import"./index-8D89370m.js";import"./index-C3eO1gGD.js";import"./immer-DXmH-xiw.js";import"./renderedTicksSlice-CFEn6KcH.js";import"./axisSelectors-eBcYGUc1.js";import"./d3-scale-BTfuin0j.js";import"./string-B6fdYHAA.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B-JFZAz_.js";import"./chartDataContext-CqMqFbwN.js";import"./CategoricalChart-DLExbf-B.js";import"./CartesianAxis-DVMfjDIU.js";import"./Layer-D33k1icw.js";import"./Text-BI7UFZae.js";import"./DOMUtils-Bf1ILi-r.js";import"./Label-BkYexeGT.js";import"./ZIndexLayer-B6ZLwcmD.js";import"./types-D4D5wSub.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-CIcu7Z1r.js";import"./symbol-NVEfhO40.js";import"./path-DyVhHtw_.js";import"./useElementOffset-qp1GxR-0.js";import"./uniqBy-DhTftgCy.js";import"./iteratee-N9KERHhC.js";import"./useAnimationId-D653EGzA.js";import"./Cross-DMq7is0n.js";import"./Rectangle-CNlPjGbB.js";import"./Sector-DDwopboB.js";import"./AnimatedItems-LimEMMjo.js";import"./ActivePoints-CSw05vyh.js";import"./Dot-t6KHQrBE.js";import"./RegisterGraphicalItemId-CH4DvZUM.js";import"./ErrorBarContext-CorbPQDF.js";import"./GraphicalItemClipPath-CAM-mwtd.js";import"./SetGraphicalItem-C_-j0gLb.js";import"./getRadiusAndStrokeWidthFromDot-By4awG1w.js";import"./ActiveShapeUtils-1-wftwDY.js";import"./step-1OtCv9Fq.js";const Bt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:s}=l,d=[];if(s)for(let a=1,S=s.length;a<S;++a){let b=0;const r=s[a-1],i=s[a];if(p(r.x)&&p(r.y)&&p(i.x)&&p(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Nt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Nt as __namedExportsOrder,Bt as default};
