import{R as e}from"./iframe-BYFAmtTx.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-CrRUVNvL.js";import{R as h}from"./zIndexSlice-Cpa1SLkC.js";import{C as g}from"./ComposedChart-Dn3fezmm.js";import{L as x}from"./Line-BJx91oUE.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-BWLi0PrL.js";import{T as V}from"./Tooltip-BkubWmJG.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-Berywq5j.js";import"./Layer-CpiNCVXM.js";import"./resolveDefaultProps-BRjUIPxP.js";import"./Text-BflMB0k7.js";import"./DOMUtils-C-XY0CD-.js";import"./isWellBehavedNumber-DghiGM0-.js";import"./useId-DFIORHHp.js";import"./useBackwardsCompatibleTheme-Bwairpph.js";import"./Label-DbWQNQho.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-So4aUaj6.js";import"./index-y_H2sp7r.js";import"./index-BfUFBuzY.js";import"./types-CaHoHJJ-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B5lYG2UO.js";import"./throttle-BncnDTze.js";import"./index-2r1iX6kD.js";import"./index-BnUV9qdG.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-gz3ID__y.js";import"./axisSelectors-Fcxl1qih.js";import"./index-bDOV_Sp5.js";import"./CartesianChart-CyzDI5B8.js";import"./chartDataContext-Dh2caTLe.js";import"./CategoricalChart-C6KS2LQO.js";import"./Curve-BqZh414E.js";import"./step-B_GvmUZd.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BVLC3LcC.js";import"./useAnimationId-CVJf-EC8.js";import"./ActivePoints-DY3ts7CW.js";import"./Dot-DmxTFD8v.js";import"./RegisterGraphicalItemId-CmRCopob.js";import"./ErrorBarContext-D5SoE2yk.js";import"./GraphicalItemClipPath-xNgZEk9E.js";import"./SetGraphicalItem-DY3wRuGw.js";import"./getRadiusAndStrokeWidthFromDot-cXRduqqB.js";import"./ActiveShapeUtils-Cm0ONgWE.js";import"./useGraphicalItemIdentity-azVLbNjG.js";import"./useElementOffset-_9jVPkcB.js";import"./uniqBy-Cz6dajQ_.js";import"./iteratee-B1BJ9kBw.js";import"./Cross-Bh0U8det.js";import"./Rectangle-DG9B685L.js";import"./util-Dxo8gN5i.js";import"./Sector-BhDlff4q.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
