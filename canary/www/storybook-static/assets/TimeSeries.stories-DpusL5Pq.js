import{R as e}from"./iframe-D4CuLoZz.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-eawce65C.js";import{R as h}from"./zIndexSlice-SXe885_i.js";import{C as g}from"./ComposedChart-DB0jlCn6.js";import{L as x}from"./Line-CEbuZzhx.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-Bg-gbMqf.js";import{T as V}from"./Tooltip-CYSWzhO2.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DBuLXD7N.js";import"./CartesianAxis-ntk7Om5m.js";import"./Layer-xCWemoOx.js";import"./resolveDefaultProps-BIWi1Y-8.js";import"./Text-xYQOnqwx.js";import"./DOMUtils-CZgli98g.js";import"./isWellBehavedNumber-BHyLU3rm.js";import"./Label-CcUkFPjg.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CwgCBSKX.js";import"./index-DKrwxI3E.js";import"./index-Cama49zD.js";import"./types-DyFRA-Bh.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DHw40_9x.js";import"./immer-CFokkZQV.js";import"./RechartsWrapper-BytBl7Lq.js";import"./index-D0U5tyHV.js";import"./index-CRkJbrCH.js";import"./axisSelectors-BkOYejTH.js";import"./CartesianChart-D5hGWEsl.js";import"./chartDataContext-BdBlfWO1.js";import"./CategoricalChart-CDNCF4CW.js";import"./Curve-BhJuHD0L.js";import"./step-DSq6gAzd.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-EJSTJ3cq.js";import"./useAnimationId-DrVwX4j9.js";import"./ActivePoints-BXZGkgHe.js";import"./Dot-Du83lW60.js";import"./RegisterGraphicalItemId-BYXBvuEW.js";import"./ErrorBarContext-uD9druzE.js";import"./GraphicalItemClipPath-Dcao9gEo.js";import"./SetGraphicalItem-D5XyE2WD.js";import"./getRadiusAndStrokeWidthFromDot-CsYgyjN7.js";import"./ActiveShapeUtils-B2FaHUJe.js";import"./useElementOffset-DHHmWbKa.js";import"./uniqBy-YpJRvRQv.js";import"./iteratee-WqXFclZi.js";import"./Cross-DDsze3iQ.js";import"./Rectangle-wZa2ZWZX.js";import"./util-Dxo8gN5i.js";import"./Sector-DQrYYCd9.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const Yt=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,Yt as __namedExportsOrder,Bt as default};
