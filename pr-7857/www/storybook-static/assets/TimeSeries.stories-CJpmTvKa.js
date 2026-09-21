import{R as e}from"./iframe-Dj8Z6PrK.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-CLQEk-FG.js";import{R as h}from"./zIndexSlice-Dis8kkjQ.js";import{C as g}from"./ComposedChart-CNA_xZ2H.js";import{L as x}from"./Line-CRAh7N0O.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-1D4CewQG.js";import{T as V}from"./Tooltip-4kfCVcdq.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-C_t42adW.js";import"./Layer-BAM8ommd.js";import"./resolveDefaultProps-B-9SHASA.js";import"./Text-c1trxvgH.js";import"./DOMUtils-Bp6mSslK.js";import"./isWellBehavedNumber-BxyDY2ba.js";import"./useId-mH59anzj.js";import"./useBackwardsCompatibleTheme-BW-Eyyrw.js";import"./Label-BbvgfVci.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DjnDFneh.js";import"./index-Bx3PqqYW.js";import"./index-CA6chf5t.js";import"./types-CIgkXEGC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-zGdO_NAv.js";import"./throttle-CKdcDnHb.js";import"./index-BBXX-7T2.js";import"./index-BMZ0mV9M.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-XYW6BA6T.js";import"./axisSelectors-B4pFlXeA.js";import"./index-MAP75uR-.js";import"./CartesianChart-pWv6R1U2.js";import"./chartDataContext-DnNc1DHN.js";import"./CategoricalChart-B9MwHwt-.js";import"./Curve-m98fbF0c.js";import"./step-ncsjPZ4b.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-0rSS-oCT.js";import"./useAnimationId-DORt3e-J.js";import"./ActivePoints-Bg_cfUBG.js";import"./Dot-M4-D-D3c.js";import"./RegisterGraphicalItemId-B_hXYrSH.js";import"./ErrorBarContext-D5I-eLzk.js";import"./GraphicalItemClipPath-WRfkTQaB.js";import"./SetGraphicalItem-vQHk7qeP.js";import"./getRadiusAndStrokeWidthFromDot-iWXc3UEX.js";import"./ActiveShapeUtils-tGmUUFtW.js";import"./useGraphicalItemIdentity-WP1DKWAp.js";import"./useElementOffset-CEBQPOfc.js";import"./uniqBy-CN11yF73.js";import"./iteratee-CSiy3jc8.js";import"./Cross-BEWH4yZn.js";import"./Rectangle--VBhlI6J.js";import"./util-Dxo8gN5i.js";import"./Sector-B39pprSn.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
