import{e}from"./iframe-BESbJ0y8.js";import{g}from"./utils-ePvtT4un.js";import{A as h,c as fe}from"./AreaChartArgs-C6jNU9tv.js";import{A as o}from"./AreaChart-UnZwILNY.js";import{p as A,r as ve}from"./Page-Cj8EiXz7.js";import{R as i}from"./arrayEqualityCheck-BJiY8zR4.js";import{C as c}from"./CartesianGrid-BpXt6o3f.js";import{X as s}from"./XAxis-DXfH0Gay.js";import{Y as l}from"./YAxis-Cn9GoD8s.js";import{A as r}from"./Area-CGapK63O.js";import{T as m}from"./Tooltip-D7AQBugG.js";import{R as p}from"./RechartsHookInspector-BIrUgBA6.js";import{L as T}from"./Legend-Bkm0uCP1.js";import{C as Ae}from"./ComposedChart-CzRf54mG.js";import{t as Ee}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DRe6KgwL.js";import"./hooks-DB8ea1bc.js";import"./axisSelectors-C-Xtojaz.js";import"./zIndexSlice-Ce7G6X37.js";import"./resolveDefaultProps-BrHDmjV-.js";import"./PolarUtils-BLb-h-71.js";import"./CartesianChart-GUhdqmTM.js";import"./chartDataContext-CNhS_Wxw.js";import"./CategoricalChart-DLR87Qgk.js";import"./CartesianAxis-D-J9lWts.js";import"./Layer-C8CJBWmq.js";import"./Text-CP99-Bit.js";import"./DOMUtils-DhuQhbbK.js";import"./Label-qXVAmmrb.js";import"./ZIndexLayer-Dn-3v6xq.js";import"./types-CGrtFV1P.js";import"./Curve-9nr7VYb2.js";import"./ReactUtils-CdwmpjBo.js";import"./ActivePoints-CJDB75_w.js";import"./Dot-CXdKB8PK.js";import"./RegisterGraphicalItemId-BqzerM7D.js";import"./GraphicalItemClipPath-wHWKymHc.js";import"./SetGraphicalItem-DKXgGvLt.js";import"./useAnimationId-XfKJYBN0.js";import"./getRadiusAndStrokeWidthFromDot-B2Gik0kj.js";import"./graphicalItemSelectors-wDI_ZJYU.js";import"./useElementOffset-BAA_29pq.js";import"./iteratee-YMYAzx6R.js";import"./Cross-B3vlJZI-.js";import"./Rectangle-B0B57kHB.js";import"./Sector-DR905TlL.js";import"./index-CUJCh7cc.js";import"./ChartSizeDimensions-DCOrE4X1.js";import"./OffsetShower-BYHO7i_w.js";import"./PlotAreaShower-CfCRjkmu.js";import"./Symbols-D6ejZ83Z.js";const Et={component:o,docs:{autodocs:!1},argTypes:h},E={render:t=>e.createElement(i,{width:"100%",height:"100%"},e.createElement(o,{...t},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(l,null),e.createElement(r,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(m,null),e.createElement(p,null))),args:{...g(h),width:500,height:400,data:A,margin:{top:10,right:30,left:0,bottom:0}}},C={render:t=>e.createElement(i,{width:"100%",height:"100%"},e.createElement(o,{...t},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(l,null),e.createElement(s,{dataKey:"x",type:"number",scale:"time",domain:["auto","auto"]}),e.createElement(r,{type:"monotone",dataKey:"y",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(r,{type:"monotone",dataKey:"z",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),e.createElement(m,{active:!0,defaultIndex:2}),e.createElement(p,null),e.createElement(T,null))),args:{...g(h),width:500,height:400,data:Ee,margin:{top:10,right:30,left:0,bottom:0}}},k={render:t=>{const d=(n,a=0)=>`${(n*100).toFixed(a)}%`,u=(n,a=0)=>{const f=a>0?n/a:0;return d(f,2)},y=n=>{const{payload:a,label:f}=n,O=a==null?void 0:a.reduce((v,ue)=>v+(ue.value??0),0);return e.createElement("div",{className:"customized-tooltip-content"},e.createElement("p",{className:"total"},`${f} (Total: ${O})`),e.createElement("ul",{className:"list"},a==null?void 0:a.map(v=>e.createElement("li",{key:`item-${v.name}`,style:{color:v.color}},`${v.name}: ${v.value}(${u(v.value,O)})`))))};return e.createElement(i,{width:"100%",height:"100%"},e.createElement(o,{...t},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(l,{tickFormatter:d}),e.createElement(r,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(r,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),e.createElement(r,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e.createElement(m,{content:y,defaultIndex:3,active:!0}),e.createElement(p,null)))},args:{...g(h),width:500,height:400,data:A,stackOffset:"expand",margin:{top:10,right:30,left:20,bottom:20}}},K={render:t=>{const d=fe.tension(.2);return e.createElement(i,{width:"100%",height:"100%"},e.createElement(o,{...t},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(l,null),e.createElement(r,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8",fillOpacity:.3}),e.createElement(r,{type:d,dataKey:"uv",stroke:"#82ca9d",fill:"#82ca9d",fillOpacity:.3}),e.createElement(m,null),e.createElement(p,null)))},args:{...g(h),width:500,height:400,data:A,margin:{top:10,right:30,left:0,bottom:0}}},x={render:t=>e.createElement("div",{style:{width:"100%"}},e.createElement(i,{width:"100%",height:200},e.createElement(o,{...t},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(l,null),e.createElement(r,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(m,null))),e.createElement(i,{width:"100%",height:200},e.createElement(o,{...t},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(l,null),e.createElement(r,{connectNulls:!0,type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(m,null),e.createElement(p,null)))),args:{...g(h),width:500,height:200,data:[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}],margin:{top:10,right:30,left:0,bottom:0}}},b={render:t=>e.createElement("div",{style:{width:"100%"}},e.createElement(i,{width:"100%",height:200},e.createElement(o,{...t},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(l,null),e.createElement(m,null),e.createElement(r,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(r,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),e.createElement(r,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}))),e.createElement(i,{width:"100%",height:200},e.createElement(o,{...t},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(l,null),e.createElement(m,null),e.createElement(r,{connectNulls:!0,type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(r,{connectNulls:!0,type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),e.createElement(r,{connectNulls:!0,type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e.createElement(p,null)))),args:{...g(h),width:500,height:200,data:[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}],margin:{top:10,right:30,left:0,bottom:0}}},w={render:t=>e.createElement("div",{style:{width:"100%"}},e.createElement("div",{style:{width:"100%",display:"flex",flexDirection:"row"}},e.createElement(i,{width:"30%",height:200},e.createElement(o,{...t},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(l,null),e.createElement(r,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(m,null),e.createElement(p,null))),e.createElement(i,{width:"70%",height:200},e.createElement(o,{...t},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(l,null),e.createElement(r,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(m,null),e.createElement(p,null)))),e.createElement(i,{width:"100%",height:200},e.createElement(o,{...t},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(l,null),e.createElement(r,{type:"monotone",dataKey:"pv",stroke:"#82ca9d",fill:"#82ca9d"}),e.createElement(m,null)))),args:{...g(h),width:500,height:200,data:A,margin:{top:10,right:30,left:0,bottom:0},syncId:"anyId"}},D={render:t=>{const u=(()=>{const y=Math.max(...t.data.map(a=>a.uv)),n=Math.min(...t.data.map(a=>a.uv));return y<=0?0:n>=0?1:y/(y-n)})();return e.createElement(i,{width:"100%",height:"100%"},e.createElement(o,{...t},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(l,null),e.createElement("defs",null,e.createElement("linearGradient",{id:"splitColor",x1:"0",y1:"0",x2:"0",y2:"1"},e.createElement("stop",{offset:u,stopColor:"green",stopOpacity:1}),e.createElement("stop",{offset:u,stopColor:"red",stopOpacity:1}))),e.createElement(r,{type:"monotone",dataKey:"uv",stroke:"#000",fill:"url(#splitColor)"}),e.createElement(m,null),e.createElement(p,null)))},args:{...g(h),width:500,height:400,data:[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:-1e3,pv:9800,amt:2290},{name:"Page D",uv:500,pv:3908,amt:2e3},{name:"Page E",uv:-2e3,pv:4800,amt:2181},{name:"Page F",uv:-250,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}],margin:{top:10,right:30,left:0,bottom:0}}},I={render:t=>e.createElement(i,{width:"100%",height:"100%"},e.createElement(o,{...t},e.createElement(s,{dataKey:"day"}),e.createElement(l,null),e.createElement(r,{dataKey:"temperature",stroke:"#d82428",fill:"#8884d8"}),e.createElement(m,{defaultIndex:4,active:!0}),e.createElement(p,null))),args:{...g(h),width:500,height:400,data:ve,margin:{top:10,right:30,left:0,bottom:0}}},Ce=[{timeHorizon:1,range:[-2.1,12.6]},{timeHorizon:3,range:[1,9.5]},{timeHorizon:5,range:[2,8.5]},{timeHorizon:10,range:[2.9,7.6]},{timeHorizon:15,range:[3.4,7.1]}],R={render:()=>e.createElement(i,{width:"100%",height:"100%"},e.createElement(o,{data:Ce,width:1e3,height:600,margin:{top:20,right:200,bottom:20,left:20}},e.createElement("defs",null,e.createElement("linearGradient",{id:"fill-gradient",gradientTransform:"rotate(90)"},e.createElement("stop",{offset:"5%",stopColor:"green",stopOpacity:1}),e.createElement("stop",{offset:.86,stopColor:"green",stopOpacity:.1}),e.createElement("stop",{offset:.86,stopColor:"red",stopOpacity:.1}),e.createElement("stop",{offset:"95%",stopColor:"red",stopOpacity:1}))),e.createElement(r,{type:"monotone",dataKey:"range",fill:"url(#fill-gradient)",stroke:"none"}),e.createElement(s,{dataKey:"timeHorizon",type:"number",domain:[1,"dataMax"],axisLine:!1,ticks:[1,3,5,10,15],unit:" yr"}),e.createElement(l,{unit:"%",ticks:[-5,0,5,10,15],domain:[-5,15]}),e.createElement(m,null),e.createElement(p,null))),args:{...g(h)}},P={render:t=>{const[d,u]=e.useState("uv");return e.createElement(e.Fragment,null,e.createElement("form",{style:{display:"flex",flexDirection:"column"},onChange:y=>"value"in y.target&&typeof y.target.value=="string"&&u(y.target.value)},e.createElement("label",{htmlFor:"dataKey-uv",style:{display:"flex",flexDirection:"row"}},e.createElement("input",{type:"radio",id:"dataKey-uv",name:"dataKey",value:"uv",defaultChecked:d==="uv"}),"dataKey=uv"),e.createElement("label",{htmlFor:"dataKey-pv",style:{display:"flex",flexDirection:"row"}},e.createElement("input",{type:"radio",id:"dataKey-pv",name:"dataKey",value:"pv",defaultChecked:d==="pv"}),"dataKey=pv"),e.createElement("label",{htmlFor:"dataKey-empty",style:{display:"flex",flexDirection:"row"}},e.createElement("input",{type:"radio",id:"dataKey-empty",name:"dataKey",value:"hidden",defaultChecked:d==="hidden"}),"Hidden")),e.createElement(i,{width:"100%"},e.createElement(Ae,{...t},e.createElement(T,null),e.createElement(s,{dataKey:"name"}),e.createElement(l,null),e.createElement(r,{dataKey:d,label:{fill:"green"},dot:!0}),e.createElement(m,null),e.createElement(p,null))))},args:{...g(h),width:500,height:400,data:A,margin:{top:10,right:30,left:0,bottom:0}}},S={render:t=>{const[d,u]=e.useState([]),y=({dataKey:n})=>{typeof n=="string"&&u(a=>a.includes(n)?a.filter(f=>f!==n):[...a,n])};return e.createElement(i,{width:"100%",height:"100%"},e.createElement(o,{...t,stackOffset:"silhouette"},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(l,null),e.createElement(r,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",strokeWidth:3,fill:"rgba(136,132,216,0.47)",hide:d.includes("uv"),animationBegin:0}),e.createElement(r,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",strokeWidth:3,fill:"rgba(130,202,157,0.47)",hide:d.includes("pv"),animationBegin:300}),e.createElement(r,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",strokeWidth:3,fill:"rgba(255,198,88,0.47)",hide:d.includes("amt"),animationBegin:600}),e.createElement(p,null),e.createElement(T,{content:({payload:n})=>e.createElement("ul",{style:{display:"flex",flexDirection:"row",listStyleType:"none",padding:0}},n==null?void 0:n.map((a,f)=>e.createElement("li",{key:`item-${f}`,style:{color:a.color}},e.createElement("button",{type:"button",onClick:()=>y(a),style:{background:"none",border:a.inactive?"3px solid #ccc":`3px solid ${a.color}`,borderRadius:"20%",padding:"10px",cursor:"pointer",opacity:typeof a.dataKey=="string"&&d.includes(a.dataKey)?.2:1}},a.value))))})))},args:{...g(h),width:500,height:400,data:A,margin:{top:10,right:30,left:0,bottom:0}}};var F,G,H;E.parameters={...E.parameters,docs:{...(F=E.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height="100%">
        <AreaChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
          <Tooltip />
          <RechartsHookInspector />
        </AreaChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(AreaChartArgs),
    width: 500,
    height: 400,
    data: pageData,
    margin: {
      top: 10,
      right: 30,
      left: 0,
      bottom: 0
    }
  }
}`,...(H=(G=E.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var N,X,Y;C.parameters={...C.parameters,docs:{...(N=C.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height="100%">
        <AreaChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <YAxis />
          <XAxis dataKey="x" type="number" scale="time" domain={['auto', 'auto']} />
          <Area type="monotone" dataKey="y" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="z" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Tooltip active defaultIndex={2} />
          <RechartsHookInspector />
          <Legend />
        </AreaChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(AreaChartArgs),
    width: 500,
    height: 400,
    data: timeData,
    margin: {
      top: 10,
      right: 30,
      left: 0,
      bottom: 0
    }
  }
}`,...(Y=(X=C.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var $,M,B;k.parameters={...k.parameters,docs:{...($=k.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: (args: Args) => {
    const toPercent = (decimal: number, fixed = 0) => \`\${(decimal * 100).toFixed(fixed)}%\`;
    const getPercent = (value: number, total: number = 0) => {
      const ratio = total > 0 ? value / total : 0;
      return toPercent(ratio, 2);
    };
    const renderTooltipContent = (o: {
      payload?: ReadonlyArray<{
        value?: number;
      }>;
      label?: string | number;
    }) => {
      const {
        payload,
        label
      } = o;
      const total = payload?.reduce((result, entry) => result + (entry.value ?? 0), 0);
      return <div className="customized-tooltip-content">
          <p className="total">{\`\${label} (Total: \${total})\`}</p>
          <ul className="list">
            {payload?.map((entry: any) => <li key={\`item-\${entry.name}\`} style={{
            color: entry.color
          }}>
                {\`\${entry.name}: \${entry.value}(\${getPercent(entry.value, total)})\`}
              </li>)}
          </ul>
        </div>;
    };
    return <ResponsiveContainer width="100%" height="100%">
        <AreaChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis tickFormatter={toPercent} />
          <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
          <Tooltip content={renderTooltipContent} defaultIndex={3} active />
          <RechartsHookInspector />
        </AreaChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(AreaChartArgs),
    width: 500,
    height: 400,
    data: pageData,
    stackOffset: 'expand',
    margin: {
      top: 10,
      right: 30,
      left: 20,
      bottom: 20
    }
  }
}`,...(B=(M=k.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};var j,W,z;K.parameters={...K.parameters,docs:{...(j=K.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: (args: Args) => {
    const cardinal = curveCardinal.tension(0.2);
    return <ResponsiveContainer width="100%" height="100%">
        <AreaChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
          <Area type={cardinal} dataKey="uv" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
          <Tooltip />
          <RechartsHookInspector />
        </AreaChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(AreaChartArgs),
    width: 500,
    height: 400,
    data: pageData,
    margin: {
      top: 10,
      right: 30,
      left: 0,
      bottom: 0
    }
  }
}`,...(z=(W=K.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var L,_,V;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <div style={{
      width: '100%'
    }}>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart {...args}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
            <Tooltip />
          </AreaChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart {...args}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Area connectNulls type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
            <Tooltip />
            <RechartsHookInspector />
          </AreaChart>
        </ResponsiveContainer>
      </div>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(AreaChartArgs),
    width: 500,
    height: 200,
    data: [{
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400
    }, {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210
    }, {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290
    }, {
      name: 'Page D',
      pv: 3908,
      amt: 2000
    }, {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181
    }, {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500
    }, {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100
    }],
    margin: {
      top: 10,
      right: 30,
      left: 0,
      bottom: 0
    }
  }
}`,...(V=(_=x.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};var q,J,Q;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <div style={{
      width: '100%'
    }}>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart {...args}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
            <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
            <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
          </AreaChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart {...args}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area connectNulls type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
            <Area connectNulls type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
            <Area connectNulls type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
            <RechartsHookInspector />
          </AreaChart>
        </ResponsiveContainer>
      </div>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(AreaChartArgs),
    width: 500,
    height: 200,
    data: [{
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400
    }, {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210
    }, {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290
    }, {
      name: 'Page D',
      pv: 3908,
      amt: 2000
    }, {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181
    }, {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500
    }, {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100
    }],
    margin: {
      top: 10,
      right: 30,
      left: 0,
      bottom: 0
    }
  }
}`,...(Q=(J=b.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var U,Z,ee;w.parameters={...w.parameters,docs:{...(U=w.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <div style={{
      width: '100%'
    }}>
        <div style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row'
      }}>
          <ResponsiveContainer width="30%" height={200}>
            <AreaChart {...args}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
              <Tooltip />
              <RechartsHookInspector />
            </AreaChart>
          </ResponsiveContainer>
          <ResponsiveContainer width="70%" height={200}>
            <AreaChart {...args}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
              <Tooltip />
              <RechartsHookInspector />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart {...args}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
            <Tooltip />
          </AreaChart>
        </ResponsiveContainer>
      </div>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(AreaChartArgs),
    width: 500,
    height: 200,
    data: pageData,
    margin: {
      top: 10,
      right: 30,
      left: 0,
      bottom: 0
    },
    syncId: 'anyId'
  }
}`,...(ee=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,re;D.parameters={...D.parameters,docs:{...(te=D.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: (args: Args) => {
    const gradientOffset = () => {
      const dataMax = Math.max(...args.data.map((i: any) => i.uv));
      const dataMin = Math.min(...args.data.map((i: any) => i.uv));
      if (dataMax <= 0) {
        return 0;
      }
      if (dataMin >= 0) {
        return 1;
      }
      return dataMax / (dataMax - dataMin);
    };
    const off = gradientOffset();
    return <ResponsiveContainer width="100%" height="100%">
        <AreaChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <defs>
            <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset={off} stopColor="green" stopOpacity={1} />
              <stop offset={off} stopColor="red" stopOpacity={1} />
            </linearGradient>
          </defs>
          <Area type="monotone" dataKey="uv" stroke="#000" fill="url(#splitColor)" />
          <Tooltip />
          <RechartsHookInspector />
        </AreaChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(AreaChartArgs),
    width: 500,
    height: 400,
    data: [{
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400
    }, {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210
    }, {
      name: 'Page C',
      uv: -1000,
      pv: 9800,
      amt: 2290
    }, {
      name: 'Page D',
      uv: 500,
      pv: 3908,
      amt: 2000
    }, {
      name: 'Page E',
      uv: -2000,
      pv: 4800,
      amt: 2181
    }, {
      name: 'Page F',
      uv: -250,
      pv: 3800,
      amt: 2500
    }, {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100
    }],
    margin: {
      top: 10,
      right: 30,
      left: 0,
      bottom: 0
    }
  }
}`,...(re=(ae=D.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var ne,oe,ie;I.parameters={...I.parameters,docs:{...(ne=I.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height="100%">
        <AreaChart {...args}>
          <XAxis dataKey="day" />
          <YAxis />
          <Area dataKey="temperature" stroke="#d82428" fill="#8884d8" />
          <Tooltip defaultIndex={4} active />
          <RechartsHookInspector />
        </AreaChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(AreaChartArgs),
    width: 500,
    height: 400,
    data: rangeData,
    margin: {
      top: 10,
      right: 30,
      left: 0,
      bottom: 0
    }
  }
}`,...(ie=(oe=I.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var se,le,de;R.parameters={...R.parameters,docs:{...(se=R.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={rangeData2} width={1000} height={600} margin={{
        top: 20,
        right: 200,
        bottom: 20,
        left: 20
      }}>
          <defs>
            <linearGradient id="fill-gradient" gradientTransform="rotate(90)">
              <stop offset="5%" stopColor="green" stopOpacity={1} />
              <stop offset={0.86} stopColor="green" stopOpacity={0.1} />
              <stop offset={0.86} stopColor="red" stopOpacity={0.1} />
              <stop offset="95%" stopColor="red" stopOpacity={1} />
            </linearGradient>
          </defs>
          <Area type="monotone" dataKey="range" fill="url(#fill-gradient)" stroke="none" />
          <XAxis dataKey="timeHorizon" type="number" domain={[1, 'dataMax']} axisLine={false} ticks={[1, 3, 5, 10, 15]} unit=" yr" />
          <YAxis unit="%" ticks={[-5, 0, 5, 10, 15]} domain={[-5, 15]} />
          <Tooltip />
          <RechartsHookInspector />
        </AreaChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(AreaChartArgs)
  }
}`,...(de=(le=R.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var me,ce,pe;P.parameters={...P.parameters,docs:{...(me=P.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [dataKey, setDataKey] = React.useState('uv');
    return <>
        <form style={{
        display: 'flex',
        flexDirection: 'column'
      }} onChange={e => 'value' in e.target && typeof e.target.value === 'string' && setDataKey(e.target.value)}>
          <label htmlFor="dataKey-uv" style={{
          display: 'flex',
          flexDirection: 'row'
        }}>
            <input type="radio" id="dataKey-uv" name="dataKey" value="uv" defaultChecked={dataKey === 'uv'} />
            dataKey=uv
          </label>
          <label htmlFor="dataKey-pv" style={{
          display: 'flex',
          flexDirection: 'row'
        }}>
            <input type="radio" id="dataKey-pv" name="dataKey" value="pv" defaultChecked={dataKey === 'pv'} />
            dataKey=pv
          </label>
          <label htmlFor="dataKey-empty" style={{
          display: 'flex',
          flexDirection: 'row'
        }}>
            <input type="radio" id="dataKey-empty" name="dataKey" value="hidden" defaultChecked={dataKey === 'hidden'} />
            Hidden
          </label>
        </form>
        <ResponsiveContainer width="100%">
          <ComposedChart {...args}>
            <Legend />
            <XAxis dataKey="name" />
            <YAxis />
            <Area dataKey={dataKey} label={{
            fill: 'green'
          }} dot />
            <Tooltip />
            <RechartsHookInspector />
          </ComposedChart>
        </ResponsiveContainer>
      </>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(AreaChartArgs),
    width: 500,
    height: 400,
    data: pageData,
    margin: {
      top: 10,
      right: 30,
      left: 0,
      bottom: 0
    }
  }
}`,...(pe=(ce=P.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var he,ge,ye;S.parameters={...S.parameters,docs:{...(he=S.parameters)==null?void 0:he.docs,source:{originalSource:`{
  // Reproducing https://github.com/recharts/recharts/issues/5992
  render: (args: Args) => {
    const [hiddenItems, setHiddenItems] = React.useState<ReadonlyArray<string>>([]);
    const handleClick = ({
      dataKey
    }: LegendPayload) => {
      if (typeof dataKey !== 'string') {
        return;
      }
      setHiddenItems(prev => prev.includes(dataKey) ? prev.filter(key => key !== dataKey) : [...prev, dataKey]);
    };
    return <ResponsiveContainer width="100%" height="100%">
        <AreaChart {...args} stackOffset="silhouette">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" strokeWidth={3} fill="rgba(136,132,216,0.47)" hide={hiddenItems.includes('uv')} animationBegin={0} />
          <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" strokeWidth={3} fill="rgba(130,202,157,0.47)" hide={hiddenItems.includes('pv')} animationBegin={300} />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" strokeWidth={3} fill="rgba(255,198,88,0.47)" hide={hiddenItems.includes('amt')} animationBegin={600} />
          <RechartsHookInspector />
          <Legend content={({
          payload
        }) => <ul style={{
          display: 'flex',
          flexDirection: 'row',
          listStyleType: 'none',
          padding: 0
        }}>
                {payload?.map((entry, index) => <li key={\`item-\${index}\`} style={{
            color: entry.color
          }}>
                    <button type="button" onClick={() => handleClick(entry)} style={{
              background: 'none',
              border: entry.inactive ? '3px solid #ccc' : \`3px solid \${entry.color}\`,
              borderRadius: '20%',
              padding: '10px',
              cursor: 'pointer',
              opacity: typeof entry.dataKey === 'string' && hiddenItems.includes(entry.dataKey) ? 0.2 : 1
            }}>
                      {entry.value}
                    </button>
                  </li>)}
              </ul>} />
        </AreaChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(AreaChartArgs),
    width: 500,
    height: 400,
    data: pageData,
    margin: {
      top: 10,
      right: 30,
      left: 0,
      bottom: 0
    }
  }
}`,...(ye=(ge=S.parameters)==null?void 0:ge.docs)==null?void 0:ye.source}}};const Ct=["Simple","StackedAreaChart","PercentAreaChart","CardinalAreaChart","AreaChartConnectNulls","StackedAreaChartConnectNulls","SynchronisedAreaChart","AreaChartFillByValue","RangedAreaChart","RangedAreaChartWithGradient","WithChangingDataKeyAndAnimations","StackedAreaWithCustomLegend"];export{x as AreaChartConnectNulls,D as AreaChartFillByValue,K as CardinalAreaChart,k as PercentAreaChart,I as RangedAreaChart,R as RangedAreaChartWithGradient,E as Simple,C as StackedAreaChart,b as StackedAreaChartConnectNulls,S as StackedAreaWithCustomLegend,w as SynchronisedAreaChart,P as WithChangingDataKeyAndAnimations,Ct as __namedExportsOrder,Et as default};
