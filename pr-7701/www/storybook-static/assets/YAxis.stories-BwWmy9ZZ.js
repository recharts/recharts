import{R as t}from"./iframe-JTvlYrAE.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-CVrRck7n.js";import{R as h}from"./zIndexSlice-D7ZMgfig.js";import{L as A}from"./LineChart-BIPZqDk2.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-BVS6pee-.js";import{X as f}from"./XAxis-D-RPwoLI.js";import{L as E}from"./Legend-bHHty92c.js";import{L as n}from"./Line-BHsO2LXO.js";import{T as v}from"./Tooltip-DdQhOIKa.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DVdjMuKO.js";import"./Text-Dg334Fxc.js";import"./resolveDefaultProps-BQ8E1HnC.js";import"./DOMUtils-9u-qTQJC.js";import"./isWellBehavedNumber-DZJ-wKuN.js";import"./useId-Ddv-MCTo.js";import"./useBackwardsCompatibleTheme-DrI3o7cI.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DRiAaxZ2.js";import"./index-oSnD0z-O.js";import"./index-DIk0NYXt.js";import"./RechartsWrapper-DxDGjzAu.js";import"./axisSelectors-5nOHG62L.js";import"./throttle-CXxUHuO5.js";import"./d3-scale-CyiZcwJt.js";import"./index-6AYKMmGX.js";import"./index-C7e_DiH0.js";import"./renderedTicksSlice-DqB8pESJ.js";import"./index-C2cjqz89.js";import"./CartesianAxis-BCWZ119m.js";import"./Layer-OemeYySJ.js";import"./types-BAT4N-Js.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Car3Atj3.js";import"./chartDataContext-r6ewa5Wc.js";import"./CategoricalChart-Dv8UcXMC.js";import"./Symbols-tWRjxaQS.js";import"./symbol-BTwm-ytb.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DZ6FTXmj.js";import"./uniqBy-CY-58Mlk.js";import"./iteratee-ByQfU6mD.js";import"./Curve-D4vRDLjT.js";import"./step-8zevn7on.js";import"./AnimatedItems-CtaNoYLp.js";import"./useAnimationId-B-nvf5O7.js";import"./ActivePoints-ox6ksdpi.js";import"./Dot-CrFaSuhf.js";import"./RegisterGraphicalItemId-5DR47K5z.js";import"./ErrorBarContext-C1DfV54u.js";import"./GraphicalItemClipPath-BqO5vOXC.js";import"./SetGraphicalItem-3AS-SEti.js";import"./getRadiusAndStrokeWidthFromDot-BDnKC9y1.js";import"./ActiveShapeUtils-BXOO9Xzj.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-CJpIXaUR.js";import"./Rectangle-C-NwM-8_.js";import"./util-Dxo8gN5i.js";import"./Sector-ZvcJKD-T.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
