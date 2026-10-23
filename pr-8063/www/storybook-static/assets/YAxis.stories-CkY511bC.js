import{R as t}from"./iframe-ByLAgMyT.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-VAKOhZSF.js";import{R as h}from"./zIndexSlice-DbH_vqN6.js";import{L as A}from"./LineChart-CQWbm8Aq.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-wfbzDarX.js";import{X as f}from"./XAxis-6YbWYxrg.js";import{L as E}from"./Legend-DXEOnPpR.js";import{L as i}from"./Line-CHgQT9HL.js";import{T as v}from"./Tooltip-CYncKF8P.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DiFVkyKf.js";import"./Text-K2cZEaeG.js";import"./resolveDefaultProps-ZOEnIxye.js";import"./pageBackground-CJjC7Pe6.js";import"./isWellBehavedNumber-ib3lWxb6.js";import"./useId-N2SJ_s2K.js";import"./useBackwardsCompatibleTheme-CAGUGjI_.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-J8gq1KPk.js";import"./index-Bd0XDIKz.js";import"./index-DQDYz7Kn.js";import"./axisSelectors-1NzaQeZW.js";import"./throttle-CEah83BE.js";import"./d3-scale-C7CraIkv.js";import"./CartesianAxis-CuUPXULq.js";import"./Layer-g3XAbIKO.js";import"./types-B5PcYGv_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Rz2ip3G5.js";import"./index-BzVpSiBS.js";import"./index-Dm91Zbdm.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-8hL2knQK.js";import"./index-DiiEfgcg.js";import"./CartesianChart-CKytCKi1.js";import"./chartDataContext-xQwTU35T.js";import"./CategoricalChart-CKR8_K54.js";import"./Symbols-BQkxcmQZ.js";import"./symbol-Bz2OujGP.js";import"./path-DyVhHtw_.js";import"./useElementOffset-uQmAL4tB.js";import"./uniqBy-Bt5JPp1g.js";import"./iteratee-CZLX0qdh.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CcWf2VYJ.js";import"./step-CewcAd9T.js";import"./activeStyles-Dj4g-rEk.js";import"./useAnimationId-CBnq7Z5z.js";import"./dataEntryStyles-Cy26GKXH.js";import"./ActivePoints-BaYU0Cf-.js";import"./Dot-C6LI6MNA.js";import"./ErrorBarContext-CBilAMI3.js";import"./GraphicalItemClipPath-Bv7X_kga.js";import"./SetGraphicalItem-BhbU4A3u.js";import"./getRadiusAndStrokeWidthFromDot-RbzC3joP.js";import"./ActiveShapeUtils-C4wijBbi.js";import"./useEffectiveDataKey-DILJl117.js";import"./Cross-DfRQs8p7.js";import"./Rectangle-CzITLvl8.js";import"./util-Dxo8gN5i.js";import"./Sector-stkq1E_q.js";const Xt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},zt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: (args: Args) => {
    const width = getWidth(args.width);
    return <ResponsiveContainer width="100%" height={500}>
        <LineChart width={600} height={300} data={coordinateWithValueData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis />
          <YAxis {...args} width={width} />
          <Legend />
          <Line dataKey="y" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(YAxisArgs),
    dataKey: 'pv',
    domain: [0, 300],
    type: 'number',
    allowDataOverflow: true,
    tickMargin: 20,
    angle: 45,
    width: '120',
    label: {
      value: 'The Axis Label',
      position: 'center',
      angle: 90
    }
  }
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,g,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: (args: Args) => {
    const sampleData = [{
      category: 'Product A',
      value: 400,
      target: 450
    }, {
      category: 'Product B',
      value: 300,
      target: 350
    }, {
      category: 'Product C',
      value: 200,
      target: 250
    }, {
      category: 'Product D',
      value: 278,
      target: 300
    }, {
      category: 'Product E',
      value: 189,
      target: 220
    }];
    return <ResponsiveContainer width="100%" height={500}>
        <LineChart data={sampleData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis {...args} tick={<CustomYAxisTickWithPadding />} width={100} />
          <Line type="monotone" dataKey="value" stroke="#3498db" name="Actual" />
          <Line type="monotone" dataKey="target" stroke="#e74c3c" strokeDasharray="5 5" name="Target" />
          <Tooltip />
          <Legend />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(YAxisArgs),
    padding: {
      top: 25,
      bottom: 35
    },
    width: 100,
    tickMargin: 10
  }
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};export{o as API,n as YAxisCustomTickWithPadding,zt as __namedExportsOrder,Xt as default};
