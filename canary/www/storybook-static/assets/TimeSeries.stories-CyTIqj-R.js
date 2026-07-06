import{R as e}from"./iframe-DILeTPtB.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-Bwnro3mN.js";import{R as h}from"./zIndexSlice-JhTumx9T.js";import{C as g}from"./ComposedChart-BoZ_CD1T.js";import{L as x}from"./Line-Dvb0PByu.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-C6hgYXhG.js";import{T as V}from"./Tooltip-DCCDzLC0.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-sqhBuaGO.js";import"./Layer-DqGeYGqQ.js";import"./resolveDefaultProps--lUhC_MY.js";import"./Text-DNGNK59q.js";import"./DOMUtils-_37cMB0k.js";import"./isWellBehavedNumber-OeMbA9Vy.js";import"./Label-RUjb4LlC.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DKm5_jWO.js";import"./index-NDv3w53H.js";import"./index-CUbE2YyD.js";import"./types-0cBFLGxq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Ds2fOQ5P.js";import"./throttle-CSfx3U2Q.js";import"./RechartsWrapper-CzFpnRvL.js";import"./index-Bb_kPu6Y.js";import"./index-CID3BdEk.js";import"./axisSelectors-BJN0i2Z4.js";import"./CartesianChart-CU1CulZs.js";import"./chartDataContext-BAm5Wg7P.js";import"./CategoricalChart-ChRNm6Kp.js";import"./Curve-BAtIGC1F.js";import"./step-DZcEBBZm.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BB2N4cgm.js";import"./useAnimationId-oe-1YumM.js";import"./ActivePoints-BZxYxGPD.js";import"./Dot-j0bVABcw.js";import"./RegisterGraphicalItemId-CxyqVt25.js";import"./ErrorBarContext-Bk5mas5-.js";import"./GraphicalItemClipPath-ElTOcYVI.js";import"./SetGraphicalItem-DVaXC3-E.js";import"./getRadiusAndStrokeWidthFromDot-Cp2-QPpj.js";import"./ActiveShapeUtils-CEry7zbZ.js";import"./useElementOffset-CqP9UHOF.js";import"./uniqBy-AzisH7Oj.js";import"./iteratee-CzwrkfQ7.js";import"./Cross-ne17vnNJ.js";import"./Rectangle-B6-5Ey9v.js";import"./util-Dxo8gN5i.js";import"./Sector-C8V5mkCQ.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
