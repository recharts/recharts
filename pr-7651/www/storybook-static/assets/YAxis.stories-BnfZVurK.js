import{R as t}from"./iframe-pNwHFSPW.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-BhLAmjxa.js";import{R as h}from"./zIndexSlice-DugJPvbP.js";import{L as A}from"./LineChart-CoXU5G4C.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-Dvq79oxD.js";import{X as f}from"./XAxis-KNJz3bpH.js";import{L as E}from"./Legend-BqqQDt1e.js";import{L as n}from"./Line-CVgLMECr.js";import{T as v}from"./Tooltip-EUdUlDr7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Bzd_UlcO.js";import"./Text-BBlVElsZ.js";import"./resolveDefaultProps-DWmH-vKe.js";import"./DOMUtils-BNxHxmQg.js";import"./isWellBehavedNumber-DROlGubD.js";import"./useBackwardsCompatibleTheme-Du48Xyly.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CUbdM7HK.js";import"./index-CPy1Xi6O.js";import"./index-PYvYT1WL.js";import"./RechartsWrapper-DLpwYUVG.js";import"./index-BghrGVl-.js";import"./index-C8JT8QJm.js";import"./throttle-B5IaBbRH.js";import"./axisSelectors-BSoQDh0E.js";import"./d3-scale-CYWGushN.js";import"./renderedTicksSlice-oWoSi7uM.js";import"./CartesianAxis-Bs05prYp.js";import"./Layer-CjujILu-.js";import"./types-DQ3XPolE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DzTN0VjC.js";import"./chartDataContext-DWAHv7Ax.js";import"./CategoricalChart-CpM9_I3K.js";import"./Symbols-DB5gAyjY.js";import"./symbol-CY3ScH1D.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DBzzVBN1.js";import"./uniqBy-CN3CrqJk.js";import"./iteratee-uh7lygO_.js";import"./Curve-5mQV-JEl.js";import"./step-BsFkcvF5.js";import"./AnimatedItems-BZeu0cey.js";import"./useAnimationId-DPXGQUo9.js";import"./ActivePoints-CCq-PEMS.js";import"./Dot-ByamxSDz.js";import"./RegisterGraphicalItemId-Cqk6hpjs.js";import"./ErrorBarContext-DVdtlYtH.js";import"./GraphicalItemClipPath-CPEJp_aS.js";import"./SetGraphicalItem-nLd7ALhr.js";import"./getRadiusAndStrokeWidthFromDot-D0TIAu-Y.js";import"./ActiveShapeUtils-bOSJ1OgY.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-BHm6uyaP.js";import"./Rectangle-CkjZyP7u.js";import"./util-Dxo8gN5i.js";import"./Sector-Db4NkV4b.js";const Ot={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const jt=["API","YAxisCustomTickWithPadding"];export{o as API,i as YAxisCustomTickWithPadding,jt as __namedExportsOrder,Ot as default};
