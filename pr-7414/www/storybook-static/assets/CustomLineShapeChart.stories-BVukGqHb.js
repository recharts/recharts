import{R as t}from"./iframe-Cx28kabR.js";import{a as p}from"./isWellBehavedNumber-CMbzImp5.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-BsMAUKhp.js";import{R as T}from"./zIndexSlice-BJophbSs.js";import{C as M}from"./CartesianGrid-D5AZ4yC0.js";import{X as $}from"./XAxis-CWTUtLan.js";import{Y as I}from"./YAxis-DtGVJOoG.js";import{L as O}from"./Legend-CHHDMFmN.js";import{T as W}from"./Tooltip-BKDHWttE.js";import{L as C}from"./Line-Cn1MCW6C.js";import{C as X}from"./Curve-BhQA-w3U.js";import"./preload-helper-Dp1pzeXC.js";import"./get-B9lrw7-x.js";import"./resolveDefaultProps-DKQmb89J.js";import"./RechartsWrapper-DI8RF6tE.js";import"./index-DVR_r8nO.js";import"./index-D-WuKlNL.js";import"./index-CXdTgtXr.js";import"./index-Cl_UPhhU.js";import"./immer-C9z4Tvb1.js";import"./renderedTicksSlice-fyKJy_9M.js";import"./axisSelectors-Bitj5C0u.js";import"./d3-scale-Dbt5vd1_.js";import"./string-B6fdYHAA.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Ub9LiVnx.js";import"./chartDataContext-BAHJZWaV.js";import"./CategoricalChart-CC4_m9gZ.js";import"./CartesianAxis-BKywCzO2.js";import"./Layer-DvLhXWX-.js";import"./Text-CTvgLWx7.js";import"./DOMUtils-XPvxL8R9.js";import"./Label-BDMWILCu.js";import"./ZIndexLayer-CZAm4j4p.js";import"./types-UeNFcMv5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-BlW_LPoz.js";import"./symbol-8JxOaiEe.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C1Lt73IJ.js";import"./uniqBy-1qQJ4H2D.js";import"./iteratee-8IZU8Gil.js";import"./useAnimationId-DLl-Zvtm.js";import"./Cross-3dBm2aFN.js";import"./Rectangle-DJiMJWXy.js";import"./Sector-CCXsbnI5.js";import"./AnimatedItems-BxtLfWI4.js";import"./ActivePoints-Bq-7Nh5y.js";import"./Dot-Iy9OPdn2.js";import"./RegisterGraphicalItemId-Blf5kOwl.js";import"./ErrorBarContext-ZNw_jj1S.js";import"./GraphicalItemClipPath-B8CVXRQ2.js";import"./SetGraphicalItem-Dk5vZuTC.js";import"./getRadiusAndStrokeWidthFromDot-pD6-2pnW.js";import"./ActiveShapeUtils-CP3CGhpS.js";import"./step-JKjbkiwo.js";const Bt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:s}=l,d=[];if(s)for(let a=1,S=s.length;a<S;++a){let b=0;const r=s[a-1],i=s[a];if(p(r.x)&&p(r.y)&&p(i.x)&&p(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
