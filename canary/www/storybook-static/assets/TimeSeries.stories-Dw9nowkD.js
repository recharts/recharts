import{R as e}from"./iframe-C-D94QkC.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-CUwTyuxs.js";import{R as h}from"./zIndexSlice-BKwIbV_L.js";import{C as g}from"./ComposedChart-B8BsA69h.js";import{L as x}from"./Line-CdnILgMU.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-DDXy3r7j.js";import{T as V}from"./Tooltip-C4QZOuVo.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-DdUGRqEL.js";import"./Layer-CmhR3M6w.js";import"./resolveDefaultProps-I0oO3hVe.js";import"./Text-BGLH01e4.js";import"./DOMUtils-CTJUeuSO.js";import"./isWellBehavedNumber-CW3dwjTv.js";import"./Label-CEdJYykS.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D0m4rTFg.js";import"./index-BIeQrv2Z.js";import"./index-CTfmrlJH.js";import"./types-BVMbYXvi.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DheIhU3o.js";import"./throttle-2piy3LIT.js";import"./RechartsThemeContext-FU4W4bTr.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-C8SdZUxr.js";import"./index-CVumJag_.js";import"./index-Dq3qqcGT.js";import"./axisSelectors-RkZJ2biJ.js";import"./CartesianChart-DbK0sv1B.js";import"./chartDataContext-BuH_IHSv.js";import"./CategoricalChart-ChFoWP6Y.js";import"./Curve-CdyB7qtw.js";import"./step-C--YvIRl.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CNnKFhUF.js";import"./useAnimationId-Qux1tHbm.js";import"./ActivePoints-DZjXqzdI.js";import"./Dot-BeDd8SJ_.js";import"./RegisterGraphicalItemId-BEroCjsR.js";import"./ErrorBarContext-xYFd4kf3.js";import"./GraphicalItemClipPath-D86AO83t.js";import"./SetGraphicalItem-D38tmZrb.js";import"./getRadiusAndStrokeWidthFromDot-B5yZBW7E.js";import"./ActiveShapeUtils-mVYQLGWO.js";import"./useElementOffset-DvCPVQU2.js";import"./uniqBy-Dbcfcj0B.js";import"./iteratee-DSgJFqTf.js";import"./Cross-DBoiUStt.js";import"./Rectangle-DbIEjk7Y.js";import"./util-Dxo8gN5i.js";import"./Sector-BRY6nb6Y.js";const _t={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const Ht=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,Ht as __namedExportsOrder,_t as default};
