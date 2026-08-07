import{R as t}from"./iframe-CLOWWJpx.js";import{a as s}from"./isWellBehavedNumber-Bkt9PZby.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-CyuYRlEG.js";import{R as T}from"./zIndexSlice-Chs4RMZ4.js";import{C as M}from"./CartesianGrid-BvYfACiJ.js";import{X as $}from"./XAxis-5aclO3SU.js";import{Y as I}from"./YAxis-QbO3_x34.js";import{L as O}from"./Legend-iijpXeNh.js";import{T as W}from"./Tooltip-CgTotejh.js";import{L as C}from"./Line-8To0Hkmm.js";import{C as X}from"./Curve-DZ0oaj1l.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DCKMEUHg.js";import"./RechartsWrapper-PtmXkiLl.js";import"./index-CoemtFTs.js";import"./index-gsgSuvG_.js";import"./index-D8vkw_WC.js";import"./index-CvPaOhKY.js";import"./throttle-NR7rmq0H.js";import"./axisSelectors-B6C-iAl6.js";import"./d3-scale-BWgGZ0ZC.js";import"./renderedTicksSlice-Dqa_BZU0.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BghZLmrY.js";import"./chartDataContext-CMbA824e.js";import"./CategoricalChart--VJeMiVR.js";import"./CartesianAxis-Cg5r0ZYC.js";import"./Layer-GlnJsptq.js";import"./Text-CoBlae8g.js";import"./DOMUtils-cc_L-yud.js";import"./Label-DG_GQs1i.js";import"./ZIndexLayer-NdFk7Llr.js";import"./types-B-e_P8o7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CG7dbDKG.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-HF_kJStw.js";import"./symbol-TVKKDHlk.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BxZhDmns.js";import"./uniqBy-Cl6wEbNY.js";import"./iteratee-CSycNkZJ.js";import"./useAnimationId-CXs0-Peu.js";import"./Cross-BhCc6GwU.js";import"./Rectangle-CzlrgWAJ.js";import"./util-Dxo8gN5i.js";import"./Sector-q8Y4yAcM.js";import"./AnimatedItems-DKcQidly.js";import"./ActivePoints-DzcusPWJ.js";import"./Dot-DoW1vskp.js";import"./RegisterGraphicalItemId-D8sZKmnj.js";import"./ErrorBarContext-zURr2Pa5.js";import"./GraphicalItemClipPath-CzZgXvBv.js";import"./SetGraphicalItem-DBtV5dO_.js";import"./graphicalItemIdentity-DPGCfWOI.js";import"./ActiveShapeUtils-6rRdWU2Q.js";import"./step-CeEc6BtY.js";const qt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let a=1,S=p.length;a<S;++a){let b=0;const r=p[a-1],i=p[a];if(s(r.x)&&s(r.y)&&s(i.x)&&s(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
