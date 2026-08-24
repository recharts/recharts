import{R as e}from"./iframe-vymQxHWj.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-Bzr2Ibny.js";import{R as h}from"./zIndexSlice-CKW_xCBG.js";import{C as g}from"./ComposedChart-Cp91ph6L.js";import{L as x}from"./Line-Cne7Fv2j.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-shLsO6db.js";import{T as V}from"./Tooltip-DEDk_-lP.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-CmNHn6lS.js";import"./Layer-DHaSl27L.js";import"./resolveDefaultProps-D1QpgZPc.js";import"./Text-BroBeAan.js";import"./DOMUtils-BKNZKxmm.js";import"./isWellBehavedNumber-CX2OxNKy.js";import"./useId-DUfTRFy5.js";import"./useBackwardsCompatibleTheme-DlCKuGJZ.js";import"./Label-CMMqvv98.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-ChwVVG6J.js";import"./index-DA8rq6pv.js";import"./index-BGTNdYjX.js";import"./types-ZBx8sWKw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-_g-coWrV.js";import"./throttle-BK01krp9.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-98W6zG7g.js";import"./index-Cl4zISxW.js";import"./index-C2Yz5dWj.js";import"./axisSelectors-qkXPFIdN.js";import"./CartesianChart-D1QWtDZ4.js";import"./chartDataContext-CLrXA2d3.js";import"./CategoricalChart-htsvTMax.js";import"./Curve-BcJWtVmj.js";import"./step-BtdsF4BX.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BAUw0A61.js";import"./useAnimationId-DSN2oeL8.js";import"./ActivePoints-C-mtjouo.js";import"./Dot-QKBcefll.js";import"./RegisterGraphicalItemId-DsxpdmKR.js";import"./ErrorBarContext-D9mVK9PP.js";import"./GraphicalItemClipPath-LHrRH_dp.js";import"./SetGraphicalItem-BeZQQame.js";import"./getRadiusAndStrokeWidthFromDot-ClysWG4b.js";import"./ActiveShapeUtils-Uk3GF-jB.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./useElementOffset-CqDgkesb.js";import"./uniqBy-Cz9SOFAs.js";import"./iteratee-Dg79fSga.js";import"./Cross-DXCXTPs9.js";import"./Rectangle-5xjAPvdj.js";import"./util-Dxo8gN5i.js";import"./Sector-B_NnGxXE.js";const It={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const qt=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,qt as __namedExportsOrder,It as default};
