import{R as e}from"./iframe-B-kCJkOw.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-C88jehXC.js";import{R as h}from"./zIndexSlice-Clv-Wr_e.js";import{C as g}from"./ComposedChart-BAXW9VrG.js";import{L as x}from"./Line-CGQuGR8D.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-IzH54SGl.js";import{T as V}from"./Tooltip-DHZ_8KJV.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-DmQK4you.js";import"./Layer-DUmzLecA.js";import"./resolveDefaultProps-BhhOMDdt.js";import"./Text-DvIEDZcH.js";import"./DOMUtils-CWJWmJqm.js";import"./isWellBehavedNumber-C4FzwffV.js";import"./useId-DGNKKzIZ.js";import"./useBackwardsCompatibleTheme-D27rYUis.js";import"./Label-CshHc_P8.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-yM8iQkyd.js";import"./index-DcAa2UuL.js";import"./index-CBKTbWE1.js";import"./types-1S0vnYpD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C6ma__-i.js";import"./throttle-DVuM4iFd.js";import"./index-2QimBBuf.js";import"./index-BVh04Hzh.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-D3el3knR.js";import"./axisSelectors-DT9SmTCn.js";import"./index-CmAyTwir.js";import"./CartesianChart-C3VLYHct.js";import"./chartDataContext-CikOGl8V.js";import"./CategoricalChart-CVXqoPY8.js";import"./Curve-__pvox1D.js";import"./step-DoJnsDJu.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BgnTcQ58.js";import"./useAnimationId-Bkh3_vjS.js";import"./ActivePoints-DYudjPxL.js";import"./Dot-BKZoXX6K.js";import"./RegisterGraphicalItemId-DX8EYk4F.js";import"./ErrorBarContext-PD5E_qHe.js";import"./GraphicalItemClipPath-Bf7ClEec.js";import"./SetGraphicalItem-DlY4dRC7.js";import"./getRadiusAndStrokeWidthFromDot-DPuw4jnu.js";import"./ActiveShapeUtils-C14ipRtW.js";import"./useGraphicalItemIdentity-wZgDD3hk.js";import"./useElementOffset-BJT03Q9O.js";import"./uniqBy-_dq4LJrc.js";import"./iteratee-Dxw4ISyk.js";import"./Cross-DBczKRIH.js";import"./Rectangle-CgoNg2OD.js";import"./util-Dxo8gN5i.js";import"./Sector-CsqMh6gD.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
