import{R as t}from"./iframe-BGeanFOP.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CS8VIEtE.js";import{Y as s}from"./YAxis-nfM60xrE.js";import{R as h}from"./zIndexSlice-DNSx6PWp.js";import{L as A}from"./LineChart-CgYgf-1f.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-DIYWtD6j.js";import{X as f}from"./XAxis-DgRdCkIO.js";import{L as E}from"./Legend-W3eeAJ18.js";import{L as n}from"./Line-DMiEAOHx.js";import{T as v}from"./Tooltip-Cc5Cgkep.js";import"./preload-helper-Dp1pzeXC.js";import"./get-74Zc7Ouu.js";import"./CartesianAxis-BCs8btUF.js";import"./Layer-D0e6T1oI.js";import"./resolveDefaultProps-fa-Aou02.js";import"./Text-B_9O6xoI.js";import"./DOMUtils-CoWv9FZp.js";import"./isWellBehavedNumber-BHEyknYr.js";import"./Label-CBWHmy26.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-gVlIv7an.js";import"./index-ywOkgYAE.js";import"./index-D4eYnHXo.js";import"./types-Uf272Grm.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CZmWC0Pi.js";import"./immer-Ba__3GQM.js";import"./RechartsWrapper-CglI8KYy.js";import"./index-Be2A9QLd.js";import"./index-DMs8Ncya.js";import"./axisSelectors-B9MbVKUE.js";import"./d3-scale-DG6z6DUu.js";import"./string-B6fdYHAA.js";import"./CartesianChart-Da0n2f02.js";import"./chartDataContext-itTBInKu.js";import"./CategoricalChart-K-eTl3yz.js";import"./Symbols-D3KDRtFF.js";import"./symbol-DYZKPaAC.js";import"./path-DyVhHtw_.js";import"./useElementOffset-uPFxcMrP.js";import"./uniqBy-DSO5Q0bs.js";import"./iteratee-DXgvlm8k.js";import"./Curve-Db2zYE8-.js";import"./step-DzzVSfhx.js";import"./AnimatedItems-C1hTs3HP.js";import"./index-BPJnJB5S.js";import"./useAnimationId-Cqn1EcvY.js";import"./ActivePoints-iE89yCuz.js";import"./Dot-CWPUI1sE.js";import"./RegisterGraphicalItemId-DsxBoKW-.js";import"./ErrorBarContext-BGfqcTM-.js";import"./GraphicalItemClipPath-Rse-X5zx.js";import"./SetGraphicalItem-BEY5qE9v.js";import"./getRadiusAndStrokeWidthFromDot-D7EeDBWL.js";import"./ActiveShapeUtils-CNEGy-9v.js";import"./Cross-DLJoHQSf.js";import"./Rectangle-BfTmTDK0.js";import"./Sector-DEijCMgI.js";const St={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const Wt=["API","YAxisCustomTickWithPadding"];export{o as API,i as YAxisCustomTickWithPadding,Wt as __namedExportsOrder,St as default};
