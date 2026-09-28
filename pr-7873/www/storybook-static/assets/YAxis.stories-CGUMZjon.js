import{R as t}from"./iframe-BFFmTTDr.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-zUGAKEHc.js";import{R as h}from"./zIndexSlice-DQM058wc.js";import{L as A}from"./LineChart-RnXmkXMX.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-27H1Xe6J.js";import{X as f}from"./XAxis-CUKTZ0Q0.js";import{L as E}from"./Legend-CjDcERwx.js";import{L as i}from"./Line-B1_198wi.js";import{T as v}from"./Tooltip-oAqx3FzE.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CVuMucY6.js";import"./Text-m1jHD_i9.js";import"./resolveDefaultProps-C4cHyrTj.js";import"./DOMUtils-DhZiPaLo.js";import"./isWellBehavedNumber-EAZXLIW4.js";import"./useId-ByStve5U.js";import"./useBackwardsCompatibleTheme-EBoDvW3e.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-V0Jr5gGg.js";import"./index-B0ZyvmjF.js";import"./index-p_2WOCPr.js";import"./RechartsWrapper-W63MnO3r.js";import"./axisSelectors-BasDhOYS.js";import"./throttle-C1mDwWe8.js";import"./d3-scale-CB2_PHYv.js";import"./index-DQJjMFyh.js";import"./index-BkJjG_2i.js";import"./renderedTicksSlice-CucX-QZC.js";import"./index-C0jb6csl.js";import"./CartesianAxis-nbQLlPRi.js";import"./Layer-BuPOal-_.js";import"./types-CeA3gQcd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-lCgugd9d.js";import"./chartDataContext-CP53CgNH.js";import"./CategoricalChart-mbieolFi.js";import"./Symbols-C97zeRwP.js";import"./symbol-Bf_JTZFF.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DB_IX7OY.js";import"./uniqBy-B2LizQEX.js";import"./iteratee-D-TKsR8y.js";import"./Curve-E9YFTGyr.js";import"./step-Dp068KI0.js";import"./AnimatedItems-BCqULUvu.js";import"./useAnimationId-CSU3KRrf.js";import"./ActivePoints-CKDoUYi7.js";import"./Dot-VdwfLdwk.js";import"./RegisterGraphicalItemId-Fjnl2b5Z.js";import"./ErrorBarContext-nDEpYIsF.js";import"./GraphicalItemClipPath-BoCgP3xh.js";import"./SetGraphicalItem-BH8-Rn7Q.js";import"./getRadiusAndStrokeWidthFromDot-DP3QTkY-.js";import"./ActiveShapeUtils-CqP12PJd.js";import"./useGraphicalItemIdentity-CpgNQJzS.js";import"./Cross-e52sgJMj.js";import"./Rectangle-BKcyOIbb.js";import"./util-Dxo8gN5i.js";import"./Sector-B0r8MdXQ.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};export{o as API,n as YAxisCustomTickWithPadding,Xt as __namedExportsOrder,Mt as default};
