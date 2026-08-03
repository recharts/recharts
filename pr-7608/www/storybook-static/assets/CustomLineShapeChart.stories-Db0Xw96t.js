import{R as t}from"./iframe-Dg9AlkU9.js";import{a as s}from"./isWellBehavedNumber-Dlf7mknf.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-D1ex3UYs.js";import{R as T}from"./zIndexSlice-BMqB4Gyy.js";import{C as M}from"./CartesianGrid-CEgse3j_.js";import{X as $}from"./XAxis-lGCMel2W.js";import{Y as I}from"./YAxis-CGrAoAPm.js";import{L as O}from"./Legend-BtNiGOnl.js";import{T as W}from"./Tooltip-CUpj4qOU.js";import{L as C}from"./Line-BXzPRIco.js";import{C as X}from"./Curve-C5hYWQKe.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Cbi8IAhV.js";import"./RechartsWrapper-7nbSuF2A.js";import"./index-BE4Y3W85.js";import"./index-Bo0WYItg.js";import"./index-DkFl9iqn.js";import"./index-CroN4XyC.js";import"./throttle-DhT8i8lB.js";import"./renderedTicksSlice-BJY2ZaZb.js";import"./axisSelectors-Bnxxm030.js";import"./d3-scale-BxAYr4dK.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DsbYlNNZ.js";import"./chartDataContext-CTYD4WLT.js";import"./CategoricalChart-Cfe3Pj_n.js";import"./CartesianAxis-ClvRbJ15.js";import"./Layer-BfnZZDJ0.js";import"./Text-B-psx-iS.js";import"./DOMUtils-Bk_tuO3J.js";import"./Label-c2urfMyQ.js";import"./ZIndexLayer-A0r-fd7s.js";import"./types-BOBXQHFv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-Bsg2W_jH.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-D8R954sr.js";import"./symbol-C6xbsDKr.js";import"./path-DyVhHtw_.js";import"./useElementOffset-I4cHeDkl.js";import"./uniqBy-D39sA4fz.js";import"./iteratee-BlVn9B3O.js";import"./useAnimationId-DpUIMGhl.js";import"./Cross-CGJxbaYQ.js";import"./Rectangle-D8eTHIfd.js";import"./util-Dxo8gN5i.js";import"./Sector-B6DjodAy.js";import"./AnimatedItems-Bh9SS3B5.js";import"./ActivePoints-C-VQNown.js";import"./Dot-CpNpS_fm.js";import"./RegisterGraphicalItemId-D2VyX5Qp.js";import"./ErrorBarContext-U9oTNNG2.js";import"./GraphicalItemClipPath-DQk35kuh.js";import"./SetGraphicalItem-CLD5IGSv.js";import"./getRadiusAndStrokeWidthFromDot-CNcpaGrG.js";import"./ActiveShapeUtils-App4amhZ.js";import"./step-DxvJ6z8y.js";const qt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let a=1,S=p.length;a<S;++a){let b=0;const r=p[a-1],i=p[a];if(s(r.x)&&s(r.y)&&s(i.x)&&s(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const zt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,zt as __namedExportsOrder,qt as default};
