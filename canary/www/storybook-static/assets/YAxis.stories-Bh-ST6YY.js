import{R as t}from"./iframe-CWlxxFHy.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-DLav1J7f.js";import{R as h}from"./zIndexSlice-eChv8v5o.js";import{L as A}from"./LineChart-U0Yt9B0U.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-B69Jsf7O.js";import{X as f}from"./XAxis-CaG1n6yG.js";import{L as E}from"./Legend-C22flD7Y.js";import{L as i}from"./Line-85VhExuj.js";import{T as v}from"./Tooltip-CwU5-Ii7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DN7T9GpD.js";import"./Text-th2Jn0HQ.js";import"./resolveDefaultProps-CVJCZaPv.js";import"./DOMUtils-Cr7AYV1x.js";import"./isWellBehavedNumber-ChXHiBih.js";import"./useId-pWQDKLmz.js";import"./useBackwardsCompatibleTheme-DcL_98G3.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C0s9Ohbn.js";import"./index-COS8QMAe.js";import"./index-BmRJ-b8E.js";import"./RechartsWrapper-B211gnQK.js";import"./axisSelectors-CY4U4PmW.js";import"./throttle-Cuwp_Om4.js";import"./d3-scale-OLXd5h8I.js";import"./index-CVuc-u2_.js";import"./index-uNGw9-ET.js";import"./renderedTicksSlice-BfstiInC.js";import"./index-C1WwnpLj.js";import"./CartesianAxis-I-oV71yY.js";import"./Layer-bfSBtv71.js";import"./types-CjEkwpQR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-3sXmRDbR.js";import"./chartDataContext-tJUp4txc.js";import"./CategoricalChart-D5zBV6NM.js";import"./Symbols-rlV4L3Ga.js";import"./symbol-ECeymSrI.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CpS3sFWC.js";import"./uniqBy-C1aAohnG.js";import"./iteratee-CYY7QzLS.js";import"./Curve-DlnhjhNv.js";import"./step-ClKKiZTa.js";import"./AnimatedItems-mLTl2k4L.js";import"./useAnimationId-BVaZGbnp.js";import"./ActivePoints-DyM9bM1H.js";import"./Dot-CVl6koMA.js";import"./RegisterGraphicalItemId-C2KKr6Fw.js";import"./ErrorBarContext-BArOb86o.js";import"./GraphicalItemClipPath-BZhOYfMs.js";import"./SetGraphicalItem-tjuShIDU.js";import"./getRadiusAndStrokeWidthFromDot-DJ40vw26.js";import"./ActiveShapeUtils-CN9JJwYa.js";import"./useGraphicalItemIdentity-BaE4xim7.js";import"./Cross-DAaEgFzG.js";import"./Rectangle-F4SI3wJr.js";import"./util-Dxo8gN5i.js";import"./Sector-DYABfBoe.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
