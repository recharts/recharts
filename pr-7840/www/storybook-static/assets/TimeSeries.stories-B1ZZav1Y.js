import{R as e}from"./iframe-Bz2BdfN4.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-Dd1a0uMa.js";import{R as h}from"./zIndexSlice-CrpvQ3cZ.js";import{C as g}from"./ComposedChart-BId0bh4a.js";import{L as x}from"./Line-05lQBnag.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-BYzlom2n.js";import{T as V}from"./Tooltip-BD_wy8eu.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-CSM2PXhl.js";import"./Layer-DzdETfRU.js";import"./resolveDefaultProps-CwyxmUze.js";import"./Text-BBc8PFQR.js";import"./DOMUtils-DYVcve-D.js";import"./isWellBehavedNumber-CN1l9n-g.js";import"./useId-BTmP1k4h.js";import"./useBackwardsCompatibleTheme-CuJrnw16.js";import"./Label-CorAy009.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CfRVDFXb.js";import"./index-m3Fpm_2g.js";import"./index-C_HDr07T.js";import"./types-DhKwB64F.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BaDfPCVK.js";import"./throttle-B-XPotXa.js";import"./index-Coj5AO7r.js";import"./index-D7YhX5lQ.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-BKy4IHB9.js";import"./axisSelectors-DHqPZzoA.js";import"./index-CC0XKx94.js";import"./CartesianChart-D9Oal9EV.js";import"./chartDataContext-BjNcuyRP.js";import"./CategoricalChart-Bq1JSSY0.js";import"./Curve-Di-YqH3x.js";import"./step-BuRQ76GT.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CrHQSA2B.js";import"./useAnimationId-DBdf0eRq.js";import"./ActivePoints-CCokz9Hm.js";import"./Dot-l8R5dmYj.js";import"./RegisterGraphicalItemId-T7-fSXxk.js";import"./ErrorBarContext-CeKdQ828.js";import"./GraphicalItemClipPath-DlHTJze-.js";import"./SetGraphicalItem-BSvf_Zq8.js";import"./getRadiusAndStrokeWidthFromDot-DcpCddvL.js";import"./ActiveShapeUtils-Ds6IyY6j.js";import"./useGraphicalItemIdentity-Ccoked2c.js";import"./useElementOffset-DQacgx_s.js";import"./uniqBy-DfpjFZky.js";import"./iteratee-Dk6qS1Wc.js";import"./Cross-DtjLt1X8.js";import"./Rectangle-Cg4r9N9p.js";import"./util-Dxo8gN5i.js";import"./Sector-BHAOOcL0.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
