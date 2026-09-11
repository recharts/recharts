import{R as e}from"./iframe-CMVuz_WR.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-Dls2O1nz.js";import{R as h}from"./zIndexSlice-Bu9BgD7f.js";import{C as g}from"./ComposedChart-BHXT81yI.js";import{L as x}from"./Line-BqUMG49z.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-BJGJFwwk.js";import{T as V}from"./Tooltip-YDDUtem4.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-aP0rvO-w.js";import"./Layer-BNHnjhAQ.js";import"./resolveDefaultProps-DlgO1mgX.js";import"./Text-_Yf6eN5X.js";import"./DOMUtils-ClFVphvT.js";import"./isWellBehavedNumber-DZvjV6rT.js";import"./useId-BNZP75Mi.js";import"./useBackwardsCompatibleTheme-YE2IG8yO.js";import"./Label-BusuXXbv.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CC6O4jFa.js";import"./index-8182fU53.js";import"./index-bZstop0p.js";import"./types-C-qBJNve.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CIeJUrxO.js";import"./throttle-BD5EEuEt.js";import"./index-t37cwTj5.js";import"./index-BjTWdNOV.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-i8SteWdh.js";import"./axisSelectors-D6i4LlUB.js";import"./index-CqRVWfEr.js";import"./CartesianChart-C05zOa_e.js";import"./chartDataContext-zZnvxmy2.js";import"./CategoricalChart-C-sUxYeh.js";import"./Curve-Br63M5mM.js";import"./step-D1p4WhbU.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BtNlpq_I.js";import"./useAnimationId-DpagfNvu.js";import"./ActivePoints-Ct1HkDqz.js";import"./Dot-BH3mzIrp.js";import"./RegisterGraphicalItemId-CX_ikIzR.js";import"./ErrorBarContext-Bf0CG0PF.js";import"./GraphicalItemClipPath-Dm_wDd6O.js";import"./SetGraphicalItem-B2N4WPPi.js";import"./getRadiusAndStrokeWidthFromDot-D4x4O6vv.js";import"./ActiveShapeUtils-Ce44UUga.js";import"./useGraphicalItemIdentity-Czg2hm9T.js";import"./useElementOffset-DlxoAXh8.js";import"./uniqBy-DV8vNVc-.js";import"./iteratee-r3vqN0UI.js";import"./Cross-DXfo2cLa.js";import"./Rectangle-BfCZIbio.js";import"./util-Dxo8gN5i.js";import"./Sector-Benbkkmr.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
