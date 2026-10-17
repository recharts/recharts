import{R as t}from"./iframe-DnfWaB1B.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-CTXcpKsn.js";import{R as h}from"./zIndexSlice-BT6q8CVb.js";import{L as A}from"./LineChart-CwQ3__iS.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-DCble6tw.js";import{X as f}from"./XAxis-CRu44DAQ.js";import{L as E}from"./Legend-CcC4oay1.js";import{L as i}from"./Line-S15yyNv0.js";import{T as v}from"./Tooltip-PYa1pAVz.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DErBiWtx.js";import"./Text-18vmCMJW.js";import"./resolveDefaultProps-8EGHXmvb.js";import"./pageBackground-BZcgsdhX.js";import"./isWellBehavedNumber-B2TPiKzz.js";import"./useId-EMQHPSSh.js";import"./useBackwardsCompatibleTheme-Csjmt-9c.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CVLoryN8.js";import"./index-CMtaCruM.js";import"./index-B-M-aHgw.js";import"./axisSelectors-BzBwCDwa.js";import"./throttle-BlHdMJGb.js";import"./d3-scale-Br-96nR7.js";import"./CartesianAxis-CiEPj5kn.js";import"./Layer-CESakEtd.js";import"./types-vzKdATLY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Diudvbk0.js";import"./index-CNOFauDT.js";import"./index-DwRvwf7P.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-C0Y2iFV1.js";import"./index-BcjfqUW0.js";import"./CartesianChart-C9GO6rC8.js";import"./chartDataContext-C2BaT0xy.js";import"./CategoricalChart-m_cFhWGU.js";import"./Symbols-BOZkE8hq.js";import"./symbol-CMK53g7Y.js";import"./path-DyVhHtw_.js";import"./useElementOffset-1uwHjJUJ.js";import"./uniqBy-YhWipnCo.js";import"./iteratee-_cPrzxJT.js";import"./isArguments-yB-y1yaH.js";import"./Curve-g0mln-5B.js";import"./step-CKvXTTBh.js";import"./activeStyles-yEksTLCx.js";import"./useAnimationId-CAjA_jBW.js";import"./dataEntryStyles-7Y85MSUL.js";import"./ActivePoints-CILYAqb7.js";import"./Dot-_SxShMFA.js";import"./ErrorBarContext-D9Sd4BvK.js";import"./GraphicalItemClipPath-CEAKjsCJ.js";import"./SetGraphicalItem-Me2AFJoT.js";import"./getRadiusAndStrokeWidthFromDot-D2lPL6Sa.js";import"./ActiveShapeUtils-DcV5jonr.js";import"./useEffectiveDataKey-Dum6ZVs0.js";import"./Cross-W5wFmbtm.js";import"./Rectangle-CCL9Y1KA.js";import"./util-Dxo8gN5i.js";import"./Sector-1tCIsPK_.js";const Xt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},zt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
