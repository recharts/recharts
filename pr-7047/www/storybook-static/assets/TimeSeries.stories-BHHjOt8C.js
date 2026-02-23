import{e}from"./iframe-NG7xn8us.js";import{X as s}from"./XAxis-DsLntPLQ.js";import{R as y}from"./arrayEqualityCheck-DBfkDrHK.js";import{C as g}from"./ComposedChart-D59nZdGq.js";import{L as x}from"./Line-B1LTLamM.js";import{R as S}from"./RechartsHookInspector-DUqk6vIV.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-C8XpcDzx.js";import{T as V}from"./Tooltip-Ci6ekKAU.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-F1bzBjNH.js";import"./Layer-DoTh6aNf.js";import"./resolveDefaultProps-wED6QReO.js";import"./Text-C1Ij1VWt.js";import"./DOMUtils-BH2xyswp.js";import"./Label-mpYwp3tS.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BXUSr-Ha.js";import"./zIndexSlice-a1m4fSW4.js";import"./immer-B8QNuQuL.js";import"./types-DHhKLS2Y.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BnMzv5_X.js";import"./hooks-BHzjNaS-.js";import"./axisSelectors-BO092XPC.js";import"./RechartsWrapper-BZXpt1WI.js";import"./index-DNpbdYzC.js";import"./CartesianChart-BQHwW8oQ.js";import"./chartDataContext-CXUKTGqi.js";import"./CategoricalChart-CYSdgUQn.js";import"./ReactUtils-CiPsQej4.js";import"./ActivePoints-B4qq1bzg.js";import"./Dot-CLcJP3NH.js";import"./RegisterGraphicalItemId-wCSwaH-X.js";import"./ErrorBarContext-D-lQEB7R.js";import"./GraphicalItemClipPath-CXScC-pK.js";import"./SetGraphicalItem-C8yfvTXJ.js";import"./useAnimationId-DOHX5rOk.js";import"./getRadiusAndStrokeWidthFromDot-CbR_-ksc.js";import"./ActiveShapeUtils-DHpoPjkT.js";import"./isPlainObject-5-gXFuU7.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C6QRuf4O.js";import"./Trapezoid-CPIxctnZ.js";import"./Sector-CCDhVr63.js";import"./Symbols-DVT-5QSh.js";import"./symbol-BtGJ97KY.js";import"./step-CZRzZlp2.js";import"./Curve-CO2TUzXD.js";import"./index-D29y0xCx.js";import"./ChartSizeDimensions-DBi-EbUV.js";import"./OffsetShower-BpCRw-nU.js";import"./PlotAreaShower-sY7tlQH0.js";import"./useElementOffset-uyWx_3MZ.js";import"./uniqBy-Czp8UKKJ.js";import"./iteratee-CmItZdDE.js";import"./Cross-CQ2UXa9g.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...StoryTemplate,
  parameters: {
    controls: {
      include: ['type', 'scale', 'domain', 'data']
    }
  },
  argTypes: {
    scale: {
      options: [undefined, 'auto', 'ordinal', 'time', 'point', 'linear'],
      control: {
        type: 'radio'
      }
    },
    type: {
      options: [undefined, 'category', 'number'],
      control: {
        type: 'radio'
      }
    }
  }
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...StoryTemplate,
  render: (args: Args) => {
    const timeValues = args.data.map(row => row.x);
    // The d3 scaleTime domain requires numeric values
    const numericValues = timeValues.map(time => time.valueOf());
    // With .nice() we extend the domain nicely.
    const timeScale = scaleTime().domain([Math.min(...numericValues), Math.max(...numericValues)]).nice();
    const xAxisArgs: XAxisProps = {
      domain: timeScale.domain().map(date => date.valueOf()),
      // @ts-expect-error we need to wrap the d3 scales in unified interface
      scale: timeScale,
      type: 'number',
      ticks: timeScale.ticks(5).map(date => date.valueOf()),
      tickFormatter: multiFormat
    };
    return <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={timeData} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}>
          <XAxis dataKey="x" {...args} {...xAxisArgs} />
          <Line dataKey="y" />
          <Tooltip />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const zt=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,zt as __namedExportsOrder,jt as default};
