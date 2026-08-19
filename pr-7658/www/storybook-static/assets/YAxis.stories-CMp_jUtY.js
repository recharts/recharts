import{R as t}from"./iframe-BEU0VEzj.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-Bwob8VzU.js";import{R as h}from"./zIndexSlice-mhTpFGis.js";import{L as A}from"./LineChart-C0H-Jll8.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-DLMroFrg.js";import{X as f}from"./XAxis-DHuUhI2Z.js";import{L as E}from"./Legend-Bq1E_AiK.js";import{L as n}from"./Line-DzyLu5qi.js";import{T as v}from"./Tooltip-fDadjpQf.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-ChFEzAZk.js";import"./Text-1VnO-5nk.js";import"./resolveDefaultProps-3wYQv28v.js";import"./DOMUtils-B3nT0fft.js";import"./isWellBehavedNumber-C2k8qIGv.js";import"./useId-DlO5xKwO.js";import"./useBackwardsCompatibleTheme-DbNZLS-G.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-nwUJ9Z8I.js";import"./index-C8ohCoZb.js";import"./index-DaENtIET.js";import"./RechartsWrapper-BgY8CE2w.js";import"./index-C2ItmsS3.js";import"./index-urNlcYtz.js";import"./throttle-BnTbmX16.js";import"./axisSelectors-X6Iztzs2.js";import"./d3-scale-D-iBl5g_.js";import"./renderedTicksSlice-xgVkluQT.js";import"./CartesianAxis-I3SN0dPC.js";import"./Layer-BxzS3V_h.js";import"./types-BcpteXUs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-SjLeJZWR.js";import"./chartDataContext-DlMENguP.js";import"./CategoricalChart-venkO3Qs.js";import"./Symbols-BStY3Nch.js";import"./symbol-ByyL1C9a.js";import"./path-DyVhHtw_.js";import"./useElementOffset-kyh44B3q.js";import"./uniqBy-ClPneOeo.js";import"./iteratee-BNBpiK-0.js";import"./Curve-DRodi9QH.js";import"./step-B0HdwPOl.js";import"./AnimatedItems-C1OsdHSy.js";import"./useAnimationId-BpSAAbQy.js";import"./ActivePoints-DmPjn1vV.js";import"./Dot-BaUbFdJY.js";import"./RegisterGraphicalItemId-C3EeC43L.js";import"./ErrorBarContext-OH4Zfmtr.js";import"./GraphicalItemClipPath-DWoEZRp9.js";import"./SetGraphicalItem-BO4L7W4Z.js";import"./getRadiusAndStrokeWidthFromDot-U5qUSWt7.js";import"./ActiveShapeUtils-DJPjSqHL.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-CQdePycd.js";import"./Rectangle-BBifCncj.js";import"./util-Dxo8gN5i.js";import"./Sector-DYrzJMn1.js";const jt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const Mt=["API","YAxisCustomTickWithPadding"];export{o as API,i as YAxisCustomTickWithPadding,Mt as __namedExportsOrder,jt as default};
