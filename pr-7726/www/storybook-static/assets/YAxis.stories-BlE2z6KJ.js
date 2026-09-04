import{R as t}from"./iframe-BKk44VOT.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-DPFxody7.js";import{R as h}from"./zIndexSlice-BjWKOBUm.js";import{L as A}from"./LineChart-CD5nW8Y-.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-CGCqXQ0o.js";import{X as f}from"./XAxis-2cJ7kaI0.js";import{L as E}from"./Legend-C8H3bsT4.js";import{L as n}from"./Line-BvewL5vb.js";import{T as v}from"./Tooltip-BgcLf1vL.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BPr6N2Q-.js";import"./Text-BtR9CUIB.js";import"./resolveDefaultProps-CzfJP_I-.js";import"./DOMUtils-Dil5o6Lr.js";import"./isWellBehavedNumber-BPjqRkxS.js";import"./useId-hvzCLp2v.js";import"./useBackwardsCompatibleTheme-VDOEj1kR.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-wqOp9Wsh.js";import"./index-BTZJ4Yum.js";import"./index-D9YNF8fg.js";import"./RechartsWrapper-CVGPHljF.js";import"./axisSelectors-BiJJw6in.js";import"./throttle-BdnDrpLZ.js";import"./d3-scale-rR_TqiZM.js";import"./index-BjsXzqOC.js";import"./index-CvfG5lr1.js";import"./renderedTicksSlice-BYjFoixx.js";import"./index-TeAPTJXJ.js";import"./CartesianAxis-D8EUtvdL.js";import"./Layer-6OjQkfig.js";import"./types-CjNR6i_K.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DS36pb4k.js";import"./chartDataContext-O1WSQyDv.js";import"./CategoricalChart-C8xt7Kx0.js";import"./Symbols-BAM533G2.js";import"./symbol-BvEjq6Qb.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CnoXh3Na.js";import"./uniqBy-CnjkiirN.js";import"./iteratee-Dk_Av1Hh.js";import"./Curve-Bl3ua7_T.js";import"./step-Dtmfv3UM.js";import"./AnimatedItems-_iMVf6zS.js";import"./useAnimationId-DT580Fuf.js";import"./ActivePoints-RMI7wAiF.js";import"./Dot-CWbOoqzR.js";import"./RegisterGraphicalItemId-DFS7YVx4.js";import"./ErrorBarContext-BlzVudvo.js";import"./GraphicalItemClipPath-Bj844YW0.js";import"./SetGraphicalItem-BFQOKK6x.js";import"./getRadiusAndStrokeWidthFromDot-nIjLU3ma.js";import"./ActiveShapeUtils-DDxo2n_b.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-D2ZCW4Jl.js";import"./Rectangle-CN77nqgF.js";import"./util-Dxo8gN5i.js";import"./Sector-BJAdyxZt.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,g,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const Xt=["API","YAxisCustomTickWithPadding"];export{o as API,i as YAxisCustomTickWithPadding,Xt as __namedExportsOrder,Mt as default};
