import{R as t}from"./iframe-u4ce63CG.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-BSJWLgXb.js";import{R as h}from"./zIndexSlice-BYJycarP.js";import{L as A}from"./LineChart-9R6q8Bfg.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-UD8jMOa9.js";import{X as f}from"./XAxis-ycYuR5GD.js";import{L as E}from"./Legend-BtGPt8jj.js";import{L as i}from"./Line-BGSQWkLw.js";import{T as v}from"./Tooltip-av0dbo9i.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-D-DGLST-.js";import"./Text-B-fKZlN3.js";import"./resolveDefaultProps-CgaWkI-c.js";import"./DOMUtils-DPz05X-i.js";import"./isWellBehavedNumber-DjD-6vVv.js";import"./useId-CDzZCSG6.js";import"./useBackwardsCompatibleTheme-BMXS8hwA.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BDv8sIeq.js";import"./index-BVP_svq1.js";import"./index-BKlhDgWa.js";import"./RechartsWrapper-Zz5ful62.js";import"./axisSelectors-CGHflyYT.js";import"./throttle-B6MgLZYN.js";import"./d3-scale-B8KmfmKn.js";import"./index-pI1Zm9lH.js";import"./index-PkCf_CwH.js";import"./renderedTicksSlice-Cs4cysVU.js";import"./index-CMticpJd.js";import"./CartesianAxis-BCYFcWgI.js";import"./Layer-DNxK11xQ.js";import"./types-BSKo_D-h.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Ddb32mjN.js";import"./chartDataContext-0PEmuSXk.js";import"./CategoricalChart-BiBJy5y7.js";import"./Symbols-ChXPCZdB.js";import"./symbol-je1hzkfs.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DFmVgwFI.js";import"./uniqBy-DhJnILqR.js";import"./iteratee-DjERPAQW.js";import"./Curve-Cpv10agS.js";import"./step-B8l-YbAv.js";import"./AnimatedItems-B0QYHb0Z.js";import"./useAnimationId-CFY7vA8F.js";import"./ActivePoints-CmJoQcI8.js";import"./Dot-CyCokxWF.js";import"./RegisterGraphicalItemId-CERn6dbU.js";import"./ErrorBarContext-D7weRgKB.js";import"./GraphicalItemClipPath-BkjNj3rm.js";import"./SetGraphicalItem-R2AcNzTI.js";import"./getRadiusAndStrokeWidthFromDot-BNYPB0Rc.js";import"./ActiveShapeUtils-D76eZVf4.js";import"./useGraphicalItemIdentity-DQSDp_oq.js";import"./Cross-DeyWm1qc.js";import"./Rectangle-Azk4KVCz.js";import"./util-Dxo8gN5i.js";import"./Sector-DH7UX8LT.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
