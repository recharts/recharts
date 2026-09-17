import{R as e}from"./iframe-o9H8KOy9.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BS32pGnO.js";import{R as h}from"./zIndexSlice-CsgZI5yp.js";import{C as g}from"./ComposedChart-CKiAGi27.js";import{L as x}from"./Line-Ci_p0EPQ.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-DTDNfzi3.js";import{T as V}from"./Tooltip-DEDRjgnU.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-oj3Fjdb5.js";import"./Layer-C1DHBl04.js";import"./resolveDefaultProps-CyRSpMie.js";import"./Text-CYZhXiJD.js";import"./DOMUtils-S1dn3EjE.js";import"./isWellBehavedNumber-Dwj2svK3.js";import"./useId-C6JRG-LM.js";import"./useBackwardsCompatibleTheme-BxxjaG6R.js";import"./Label-nsqVjfiI.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DKFjfMYd.js";import"./index-UCkqSDpm.js";import"./index-DST8VIu0.js";import"./types-Df3MXzgv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BmkiUxUd.js";import"./throttle-hW6vudhT.js";import"./index-EzgePqD6.js";import"./index-CnuR4GUo.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-BZ0mtC1D.js";import"./axisSelectors-Cs0jtKkZ.js";import"./index-jpFEenpG.js";import"./CartesianChart-Gd4WSf--.js";import"./chartDataContext-up-x_HqN.js";import"./CategoricalChart-PL_s45W5.js";import"./Curve-3cnVmCNd.js";import"./step-UNDjkb8Y.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-eAjckEIy.js";import"./useAnimationId-BkEDLLv5.js";import"./ActivePoints-DgEMzgoZ.js";import"./Dot-CCkur9hD.js";import"./RegisterGraphicalItemId-C9q20zyT.js";import"./ErrorBarContext-CLeU9z0V.js";import"./GraphicalItemClipPath-DTZX6fHd.js";import"./SetGraphicalItem-obUYvC56.js";import"./getRadiusAndStrokeWidthFromDot-_fRFOmw4.js";import"./ActiveShapeUtils-DCctTHnp.js";import"./useGraphicalItemIdentity-CagZ9rA9.js";import"./useElementOffset-C_bcUY1n.js";import"./uniqBy-CCcfeBgo.js";import"./iteratee-CwqL5YXH.js";import"./Cross-o8hW64vL.js";import"./Rectangle-Dt3SJkKE.js";import"./util-Dxo8gN5i.js";import"./Sector-DyZ7WMjM.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
