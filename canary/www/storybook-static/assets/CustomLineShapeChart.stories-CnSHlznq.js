import{R as t}from"./iframe-DXKzzws4.js";import{i as p}from"./isWellBehavedNumber-C7AyK_9S.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-B_HT4_qO.js";import{R as T}from"./zIndexSlice-DMX8Hhzz.js";import{C as M}from"./CartesianGrid-dn8jQool.js";import{X as $}from"./XAxis-B7JoDVaz.js";import{Y as I}from"./YAxis-rHqCYw2v.js";import{L as O}from"./Legend-QcCiTVJb.js";import{T as W}from"./Tooltip-BgqWabVR.js";import{L as C}from"./Line-CqA0P4v1.js";import{C as X}from"./Curve-DmVGde8u.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BSNhK7r6.js";import"./RechartsWrapper-CAtabfYs.js";import"./index-D033D4Zv.js";import"./index-Bg5IH0LC.js";import"./index-lFjFQb2-.js";import"./index-CL_M0WF6.js";import"./throttle-BD3oF8Du.js";import"./renderedTicksSlice-egJwNk4f.js";import"./axisSelectors-v3JljGjn.js";import"./d3-scale-DYAtoVGZ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BbjVuMqC.js";import"./chartDataContext-CSoMwZ9z.js";import"./CategoricalChart-CAv3CBz7.js";import"./CartesianAxis-CVHxu40z.js";import"./Layer-C_ZH39cx.js";import"./Text-H0ump6nt.js";import"./DOMUtils-DglI10nq.js";import"./Label-C30Q7qcI.js";import"./ZIndexLayer-CMaU0WuF.js";import"./types-BceUICSF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-COmsubEa.js";import"./symbol-BUlFMA9I.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BqV11enm.js";import"./uniqBy-CUADLInF.js";import"./iteratee-CHkUkcds.js";import"./useAnimationId-DeOyrvrW.js";import"./Cross-5OJntGQy.js";import"./Rectangle-DKjzEYBW.js";import"./util-Dxo8gN5i.js";import"./Sector-G5hJhTYV.js";import"./AnimatedItems-DnXQuXZD.js";import"./ActivePoints-CSBiBk5C.js";import"./Dot-sf8y4IWV.js";import"./RegisterGraphicalItemId-CW1tA6c4.js";import"./ErrorBarContext-CuLgZ_wX.js";import"./GraphicalItemClipPath-C72bnPxn.js";import"./SetGraphicalItem-CYGj1XVR.js";import"./getRadiusAndStrokeWidthFromDot-BvNGRFfN.js";import"./ActiveShapeUtils-D95WmeDO.js";import"./step-BR5H3S21.js";const Nt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:s}=l,d=[];if(s)for(let a=1,S=s.length;a<S;++a){let b=0;const r=s[a-1],i=s[a];if(p(r.x)&&p(r.y)&&p(i.x)&&p(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const qt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,qt as __namedExportsOrder,Nt as default};
