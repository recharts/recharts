import{R as t}from"./iframe-C-jRtd4O.js";import{a as s}from"./isWellBehavedNumber-BazoxJ8k.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-Dfw9sDCN.js";import{R as T}from"./zIndexSlice-C13rA1yY.js";import{C as M}from"./CartesianGrid-BaDRxlr9.js";import{X as $}from"./XAxis-BUOjYmWG.js";import{Y as I}from"./YAxis-BsnlIXwv.js";import{L as O}from"./Legend-BwpHDNTz.js";import{T as W}from"./Tooltip-CfpuqfXQ.js";import{L as C}from"./Line-DYmy7AmN.js";import{C as X}from"./Curve-BSXCagUH.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-hGxk2_Y7.js";import"./RechartsWrapper-CszU7DXa.js";import"./index-Cqo_qzOk.js";import"./index-CODjAUjN.js";import"./index-JIvcUmdP.js";import"./index-yCZUjS0Z.js";import"./throttle-t4hhNfzx.js";import"./renderedTicksSlice--jA8UMed.js";import"./axisSelectors-CkStVnzz.js";import"./d3-scale-DJzOiobO.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-dpIhYASN.js";import"./chartDataContext-POKzhFjx.js";import"./CategoricalChart-DlYy8Ici.js";import"./CartesianAxis-Dovpw9_t.js";import"./Layer-0nVmjaPa.js";import"./Text-Bq6-_dbg.js";import"./DOMUtils-BNQTHuwM.js";import"./Label-ESmdcWMr.js";import"./ZIndexLayer-BPTUfBlU.js";import"./types-DJYeJibv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-D59rVGZ_.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-DyJcHjUB.js";import"./symbol-DV86W81H.js";import"./path-DyVhHtw_.js";import"./useElementOffset-ByJvEw10.js";import"./uniqBy-Cg8LBFHE.js";import"./iteratee-K_oW_REd.js";import"./useAnimationId-CyWcqLuD.js";import"./Cross-CgOOj4td.js";import"./Rectangle-DsgzCHOI.js";import"./util-Dxo8gN5i.js";import"./Sector-Bgnqs9x5.js";import"./AnimatedItems-Dni8LwDO.js";import"./ActivePoints-B23Yd9jI.js";import"./Dot-DcnRANwh.js";import"./RegisterGraphicalItemId-fpfKicem.js";import"./ErrorBarContext-B9gJUi0L.js";import"./GraphicalItemClipPath-BbJiOV57.js";import"./SetGraphicalItem-DdFJ0gfA.js";import"./getRadiusAndStrokeWidthFromDot-DDj4ZBfK.js";import"./ActiveShapeUtils-DtJs66Wu.js";import"./step-BK85lAbe.js";const qt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let a=1,S=p.length;a<S;++a){let b=0;const r=p[a-1],i=p[a];if(s(r.x)&&s(r.y)&&s(i.x)&&s(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
