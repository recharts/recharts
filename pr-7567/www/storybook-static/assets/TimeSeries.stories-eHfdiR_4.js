import{R as e}from"./iframe-BUBMop56.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-Beu0D676.js";import{R as h}from"./zIndexSlice-BFOCeNjP.js";import{C as g}from"./ComposedChart-Co9cxOOG.js";import{L as x}from"./Line-ChQucypc.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-BKS6cnWE.js";import{T as V}from"./Tooltip-DD2mCsuY.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-DqkvNHf2.js";import"./Layer-CEgjWxAQ.js";import"./resolveDefaultProps-C_KdVhp0.js";import"./Text-DL-t9yLw.js";import"./DOMUtils-Bej4Btff.js";import"./isWellBehavedNumber-CCPoxx8d.js";import"./Label-C8PySNEK.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BKbyZAtu.js";import"./index-CySDvqVz.js";import"./index-CgGvCayo.js";import"./types-CIINUjJb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BpqvL_BB.js";import"./throttle-D75nL504.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-DIZMbcTA.js";import"./index-D9WH3_pB.js";import"./index-CYnUHsqF.js";import"./axisSelectors-CCSlXmRc.js";import"./CartesianChart-BmaucleZ.js";import"./chartDataContext-BpFZdk1W.js";import"./CategoricalChart-a6ycapdr.js";import"./Curve-B8ZzY9nf.js";import"./step-nlwLlUk8.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-T6oPSFaY.js";import"./useAnimationId-BjgoYA5x.js";import"./ActivePoints-DFwLh6HZ.js";import"./Dot-3ZhUHudT.js";import"./RegisterGraphicalItemId-BChVYVcH.js";import"./ErrorBarContext-D15ZYdOL.js";import"./GraphicalItemClipPath-0CoE9plv.js";import"./SetGraphicalItem-DM6DkeHR.js";import"./getRadiusAndStrokeWidthFromDot-BMrKZbwO.js";import"./ActiveShapeUtils-Dow-vWc_.js";import"./useElementOffset-Bc8UoZ8e.js";import"./uniqBy-GaWKKGJl.js";import"./iteratee-oR2_Mtz0.js";import"./Cross-_pUABBbK.js";import"./Rectangle-B2jqxTYu.js";import"./util-Dxo8gN5i.js";import"./Sector-DvaIwhue.js";const Yt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const _t=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,_t as __namedExportsOrder,Yt as default};
