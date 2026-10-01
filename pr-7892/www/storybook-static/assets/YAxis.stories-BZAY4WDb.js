import{R as t}from"./iframe-C9psKz5H.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-hQp9fU0j.js";import{R as h}from"./zIndexSlice-DpmGRp-Q.js";import{L as A}from"./LineChart-5QRg-rPX.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-D3n5VgzI.js";import{X as f}from"./XAxis-7TSk_dxf.js";import{L as E}from"./Legend-D-FmtXzI.js";import{L as i}from"./Line-DANxSI-f.js";import{T as v}from"./Tooltip-D7estliL.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-tLoAdhBg.js";import"./Text-CxmkIGJJ.js";import"./resolveDefaultProps-DXpX2jzi.js";import"./DOMUtils-5QLcrI6X.js";import"./isWellBehavedNumber-DtoestQf.js";import"./useId-BmRjTouL.js";import"./useBackwardsCompatibleTheme-u-6iGz_C.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dp6mI4S2.js";import"./index-D90R4_Ry.js";import"./index-DO4kgVpb.js";import"./RechartsWrapper-DBEUhNwk.js";import"./axisSelectors-BVR1qW5C.js";import"./throttle-ybqMtWK8.js";import"./d3-scale-DOPiKI9I.js";import"./index-Boed59-W.js";import"./index-C0Ds42Ok.js";import"./renderedTicksSlice-C81k7Y0M.js";import"./index-C4HmYpYK.js";import"./CartesianAxis-QX-AYICp.js";import"./Layer-D1lf7NaI.js";import"./types-Bo9cWGoI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DqQaN6li.js";import"./chartDataContext-C8FZLZVj.js";import"./CategoricalChart-oiLx-c2-.js";import"./Symbols-CmEK9_Zz.js";import"./symbol-Csc8y23F.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BFRDXyQs.js";import"./uniqBy-vdai6ABx.js";import"./iteratee-CxOXUx_n.js";import"./Curve-ejO9vv5H.js";import"./step-Ba-sjoMn.js";import"./AnimatedItems-CEzVE_qf.js";import"./useAnimationId-NO-aRC2z.js";import"./ActivePoints-DV3QsG_s.js";import"./Dot-CoxDYTLK.js";import"./RegisterGraphicalItemId-Bou02MzC.js";import"./ErrorBarContext-C0X-i2LX.js";import"./GraphicalItemClipPath-BiRBEzG3.js";import"./SetGraphicalItem-DbUk56bY.js";import"./getRadiusAndStrokeWidthFromDot-D95GFJQd.js";import"./ActiveShapeUtils-B_bGVHtn.js";import"./useGraphicalItemIdentity-CFJPU_4U.js";import"./Cross-Bqsji87y.js";import"./Rectangle-DiC0sGbs.js";import"./util-Dxo8gN5i.js";import"./Sector-BJeHlwhS.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
