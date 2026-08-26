import{R as e}from"./iframe-NQEVGrWF.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-C4UfJE-i.js";import{R as h}from"./zIndexSlice-CP33F7KF.js";import{C as g}from"./ComposedChart-Cgzz0lSa.js";import{L as x}from"./Line-DDJBvxgz.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-C0DHVJ_t.js";import{T as V}from"./Tooltip-CEyjOmMa.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-Ne7lbJuc.js";import"./Layer-BG4rdiih.js";import"./resolveDefaultProps-CGKk3whs.js";import"./Text-DakXKvvI.js";import"./DOMUtils-CiNl2Unk.js";import"./isWellBehavedNumber-Dsnr4nI4.js";import"./useId-DDLNeh8Q.js";import"./useBackwardsCompatibleTheme-B1LwAuqZ.js";import"./Label-B9UYxviU.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-n1tytnrA.js";import"./index-B9NPWI0k.js";import"./index-CRVzIMtc.js";import"./types-BJqKvaYz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Cd3xmYKN.js";import"./throttle-CkddbLRN.js";import"./index-aCLowHDg.js";import"./index-B8SC5NXw.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-B7RacVym.js";import"./axisSelectors-5o3NJxix.js";import"./index-DGDKtdxG.js";import"./CartesianChart-BeI0IYJq.js";import"./chartDataContext-CvCTBKTZ.js";import"./CategoricalChart-CoPL0zMa.js";import"./Curve-Do1Fb_jm.js";import"./step-ByZJsQBm.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DrvzgAVh.js";import"./useAnimationId-CyMrVWUy.js";import"./ActivePoints-jIqLZQku.js";import"./Dot-BomDn2NI.js";import"./RegisterGraphicalItemId-DJee5cpk.js";import"./ErrorBarContext-D6gOrQXq.js";import"./GraphicalItemClipPath-Bh5K_QLr.js";import"./SetGraphicalItem-D8Gbozo5.js";import"./getRadiusAndStrokeWidthFromDot-B6sJlwAv.js";import"./ActiveShapeUtils-DwrA3FQy.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./useElementOffset-CMLR-6Dm.js";import"./uniqBy-CTK2n1vo.js";import"./iteratee-CTZe6gh0.js";import"./Cross-svuRrrve.js";import"./Rectangle-Dp4_4O8h.js";import"./util-Dxo8gN5i.js";import"./Sector-C48RjXIQ.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const Pt=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,Pt as __namedExportsOrder,qt as default};
