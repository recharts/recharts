import{R as e}from"./iframe-DqSUlz6e.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-DmD7UEym.js";import{R as h}from"./zIndexSlice-DtAX5jMh.js";import{C as g}from"./ComposedChart-j0xuhBF1.js";import{L as x}from"./Line-Dnsu9Jwi.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-CkMKmC-4.js";import{T as V}from"./Tooltip-Dn2nlbp1.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-BPJ_bm1Z.js";import"./Layer-CcVS5xmO.js";import"./resolveDefaultProps-CwPSCmmx.js";import"./Text-rxtWTnFK.js";import"./DOMUtils-BO-LSrQT.js";import"./isWellBehavedNumber-DsplX-23.js";import"./useId-DIxfitZT.js";import"./useBackwardsCompatibleTheme-Cpo7LNnn.js";import"./Label-COTXmSNC.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-w7X3Qx8i.js";import"./index-CvBr5MD5.js";import"./index-Dw4JWeKW.js";import"./types-BK6ZMP2B.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Iw1xe9hi.js";import"./throttle-DHy4hNYv.js";import"./index-BuJIoyr5.js";import"./index-7NBQQOYh.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-B0IxRf2C.js";import"./axisSelectors-Bh_wIpJu.js";import"./index-GNQmxyz-.js";import"./CartesianChart-BZt0ttBq.js";import"./chartDataContext-DLE2_VFr.js";import"./CategoricalChart-Chjdlx8c.js";import"./Curve-XYmMSxrQ.js";import"./step-C_sGtyz6.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DZn2nJaS.js";import"./useAnimationId-B7qxPui8.js";import"./ActivePoints-QMBiBXLX.js";import"./Dot-BfFUZLy_.js";import"./RegisterGraphicalItemId-GuyP8w5W.js";import"./ErrorBarContext-C2faiS6t.js";import"./GraphicalItemClipPath-CXwxXFyI.js";import"./SetGraphicalItem-BNDeXFGY.js";import"./getRadiusAndStrokeWidthFromDot-HVfHJii_.js";import"./ActiveShapeUtils-D4bP4Qte.js";import"./useGraphicalItemIdentity-P2fDicxj.js";import"./useElementOffset-CJw6FlW4.js";import"./uniqBy-BqET5rKO.js";import"./iteratee-rBmKTZZO.js";import"./Cross-BZSuUUY5.js";import"./Rectangle-C5vSLqhQ.js";import"./util-Dxo8gN5i.js";import"./Sector-Ww3FvxMs.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,Pt as __namedExportsOrder,qt as default};
