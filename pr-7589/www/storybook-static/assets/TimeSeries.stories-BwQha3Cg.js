import{R as e}from"./iframe-BYXa1Tn_.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-B5zWifv0.js";import{R as h}from"./zIndexSlice-CoJck3d_.js";import{C as g}from"./ComposedChart-DqcQ0VDg.js";import{L as x}from"./Line-6gFOJp9o.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-BtOkOC4O.js";import{T as V}from"./Tooltip-C6q0x70q.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-C3icPOpT.js";import"./Layer-C8ZXIHkO.js";import"./resolveDefaultProps-BEKG2AD6.js";import"./Text-ClavD2Bt.js";import"./DOMUtils-BRP-TV91.js";import"./isWellBehavedNumber-TGnGu01x.js";import"./Label-CW6jLePn.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BQRYe1sp.js";import"./index-B0FnoVJH.js";import"./index-DuqGTInP.js";import"./types-BeIXyo3E.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CNHtcDgN.js";import"./throttle-CoxoiN6t.js";import"./RechartsThemeContext-Dj7m8Gm_.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-OaYp5Da5.js";import"./index-D68cxjh6.js";import"./index-BI8zhQ65.js";import"./axisSelectors-CdQyM0Ik.js";import"./CartesianChart-Cs0h_EiO.js";import"./chartDataContext-DfKLz63T.js";import"./CategoricalChart-DdtEtndX.js";import"./Curve-aAd9t3Ts.js";import"./step-pRYWj5UR.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DMwIY_YG.js";import"./useAnimationId-8c28klLP.js";import"./ActivePoints-Cjb131Hl.js";import"./Dot-CQ0xec6K.js";import"./RegisterGraphicalItemId-D6qWKqiK.js";import"./ErrorBarContext-Cf7wWmw3.js";import"./GraphicalItemClipPath-Dujotke_.js";import"./SetGraphicalItem-C_1bFSrg.js";import"./getRadiusAndStrokeWidthFromDot-DwmygPe4.js";import"./ActiveShapeUtils-DejqAcqQ.js";import"./useElementOffset-COKsSNbR.js";import"./uniqBy-CrCoN25E.js";import"./iteratee-DxJ0e1aw.js";import"./Cross-D1QpEOyM.js";import"./Rectangle-C8TpkBjX.js";import"./util-Dxo8gN5i.js";import"./Sector-DIzP0rv4.js";const _t={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const Ht=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,Ht as __namedExportsOrder,_t as default};
