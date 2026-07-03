import{R as e}from"./iframe-Bqhaiwq8.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-Du5noYHq.js";import{R as h}from"./zIndexSlice-BJS-a__d.js";import{C as g}from"./ComposedChart-oTFXmOZl.js";import{L as x}from"./Line-Bp-E22-P.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-i5sn4jpY.js";import{T as V}from"./Tooltip-upHYEKlK.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-217VZgzf.js";import"./Layer-Co0F7rtj.js";import"./resolveDefaultProps-Bz_Hg9tX.js";import"./Text-BtH8DQvC.js";import"./DOMUtils-BpHmJx8-.js";import"./isWellBehavedNumber-Be3mi6aN.js";import"./Label-D7swILSN.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CIZ0RaUe.js";import"./index-CENQUa5y.js";import"./index-ChBrJC7P.js";import"./types-OmV-cVYy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-dCTNHtgX.js";import"./throttle-C_LSyirk.js";import"./RechartsWrapper-D0HX42ff.js";import"./index-QuJ2DhnT.js";import"./index-DxkzSUWz.js";import"./axisSelectors-Dd8okoki.js";import"./CartesianChart-DUun358R.js";import"./chartDataContext-BxVBYRL6.js";import"./CategoricalChart-BqinH4KG.js";import"./Curve-DUDGkuFv.js";import"./step-Yi3ifzmX.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-ZUM4uHMT.js";import"./useAnimationId-D0jk17bx.js";import"./ActivePoints-DZkQMisB.js";import"./Dot-BTqZFgU3.js";import"./RegisterGraphicalItemId-BMXEaOnC.js";import"./ErrorBarContext-CWwmFSat.js";import"./GraphicalItemClipPath-9FMv3-Ih.js";import"./SetGraphicalItem-CKezQY-K.js";import"./getRadiusAndStrokeWidthFromDot-BRzjy3Uy.js";import"./ActiveShapeUtils-DZHTMyL3.js";import"./useElementOffset-CmWzJYxc.js";import"./uniqBy-yoTZI67c.js";import"./iteratee-CsXi7xCb.js";import"./Cross-BBnkhDin.js";import"./Rectangle-BIkqYwDS.js";import"./util-Dxo8gN5i.js";import"./Sector-C0XGRQ32.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
